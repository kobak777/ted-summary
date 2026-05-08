import { http, HttpResponse, delay } from 'msw';

interface SummaryResponse {
  summary: string;
  title?: string;
  duration?: number;
  status: 'success' | 'error';
  message?: string;
}

const API_ENDPOINTS = {
  SUMMARIZE: '/api/summarize',
  SUMMARIZE_RU: '/api/summarize/ru',
  SUMMARIZE_EN: '/api/summarize/en',
  STATUS: '/api/status',
  VIDEO_INFO: '/api/video-info'
} as const;

const STATUS_CODES = {
  BAD_REQUEST: 400,
  INTERNAL_SERVER_ERROR: 500
} as const;

const DELAYS = {
  SUMMARIZE: 2000,
  VIDEO_INFO: 500
} as const;

const MOCK_SUMMARIES_RU: Record<string, string> = {
  default: "В этом выступлении спикер обсуждает важность креативного мышления и инноваций. Основные идеи: 1) Традиционные подходы к решению проблем часто ограничивают наш потенциал. 2) Необходимо создавать среду, где поощряются эксперименты и ошибки. 3) Инновации рождаются на стыке разных дисциплин. Спикер приводит примеры успешных компаний, которые изменили подход к работе.",

  tech: "Выступление фокусируется на технологических трендах будущего. Ключевые моменты: развитие искусственного интеллекта, этические аспекты внедрения новых технологий, влияние автоматизации на рынок труда. Спикер призывает к ответственному использованию технологий и необходимости регулирования.",

  psychology: "Лекция посвящена психологии счастья и благополучия. Исследования показывают, что материальные блага не гарантируют счастье. Важные факторы: социальные связи, чувство принадлежности, благодарность, mindfulness практики. Спикер предлагает конкретные упражнения для повышения уровня счастья."
};

const MOCK_SUMMARIES_EN: Record<string, string> = {
  default: "In this talk, the speaker discusses the importance of creative thinking and innovation. Key ideas: 1) Traditional problem-solving approaches often limit our potential. 2) It is necessary to create an environment where experiments and mistakes are encouraged. 3) Innovations arise at the intersection of different disciplines. The speaker gives examples of successful companies that have changed their approach to work.",

  tech: "The talk focuses on future technology trends. Key points: the development of artificial intelligence, ethical aspects of implementing new technologies, the impact of automation on the labor market. The speaker calls for responsible use of technology and the need for regulation.",

  psychology: "The lecture is devoted to the psychology of happiness and well-being. Research shows that material goods do not guarantee happiness. Important factors: social connections, a sense of belonging, gratitude, mindfulness practices. The speaker offers specific exercises to increase the level of happiness."
};

const extractVideoId = (url: string): string => {
  const match = url.match(/ted\.com\/talks\/([^?]+)/);
  return match ? match[1] : 'unknown';
};

const determineTopic = (url: string): string => {
  if (url.toLowerCase().includes('tech') || url.toLowerCase().includes('ai')) {
    return 'tech';
  }
  if (url.toLowerCase().includes('psychology') || url.toLowerCase().includes('happy')) {
    return 'psychology';
  }
  return 'default';
};

const createSummaryResponse = (url: string, language: 'ru' | 'en' = 'ru') => {
  const videoId = extractVideoId(url);
  const topic = determineTopic(url);

  const summaries = language === 'en' ? MOCK_SUMMARIES_EN : MOCK_SUMMARIES_RU;
  const summaryText = summaries[topic];
  const title = videoId.replace(/_/g, ' ').replace(/-/g, ' ');

  const contextNote = language === 'en'
    ? `\n\nContext: This summary is based on the analysis of the video${title ? ` "${title}"` : ''} from TED.com. Generative neural networks are used to highlight key ideas and structure the content.`
    : `\n\n Контекст: Эта саммари основана на анализе видео${title ? ` "${title}"` : ''} с TED.com. Используются генеративные нейросети для выделения ключевых идей и структурирования контента.`;

  return `${summaryText}${contextNote}`;
};

export const handlers = [
  http.post(API_ENDPOINTS.SUMMARIZE, async ({ request }) => {
    await delay(DELAYS.SUMMARIZE);

    try {
      const requestBody = await request.json() as { url: string };
      const { url } = requestBody;

      if (!url) {
        return HttpResponse.json<SummaryResponse>({
          status: 'error',
          summary: '',
          message: 'URL не предоставлен'
        }, { status: STATUS_CODES.BAD_REQUEST });
      }

      if (!url.includes('ted.com')) {
        return HttpResponse.json<SummaryResponse>({
          status: 'error',
          summary: '',
          message: 'Пожалуйста, предоставьте корректную ссылку на TED.com видео'
        }, { status: STATUS_CODES.BAD_REQUEST });
      }

      const finalSummary = createSummaryResponse(url, 'ru');
      const videoId = extractVideoId(url);

      return HttpResponse.json<SummaryResponse>({
        summary: finalSummary,
        title: videoId,
        status: 'success'
      });

    } catch (error) {
      console.error('Error processing request:', error);
      return HttpResponse.json<SummaryResponse>({
        status: 'error',
        summary: '',
        message: 'Ошибка при обработке запроса'
      }, { status: STATUS_CODES.INTERNAL_SERVER_ERROR });
    }
  }),

  http.post(API_ENDPOINTS.SUMMARIZE_RU, async ({ request }) => {
    await delay(DELAYS.SUMMARIZE);

    try {
      const requestBody = await request.json() as { url: string };
      const { url } = requestBody;

      if (!url || !url.includes('ted.com')) {
        return HttpResponse.json<SummaryResponse>({
          status: 'error',
          summary: '',
          message: 'Пожалуйста, предоставьте корректную ссылку на TED.com видео'
        }, { status: STATUS_CODES.BAD_REQUEST });
      }

      const finalSummary = createSummaryResponse(url, 'ru');
      const videoId = extractVideoId(url);

      return HttpResponse.json<SummaryResponse>({
        summary: finalSummary,
        title: videoId,
        status: 'success'
      });

    } catch (error) {
      return HttpResponse.json<SummaryResponse>({
        status: 'error',
        summary: '',
        message: 'Ошибка при обработке запроса'
      }, { status: STATUS_CODES.INTERNAL_SERVER_ERROR });
    }
  }),

  http.post(API_ENDPOINTS.SUMMARIZE_EN, async ({ request }) => {
    await delay(DELAYS.SUMMARIZE);

    try {
      const requestBody = await request.json() as { url: string };
      const { url } = requestBody;

      if (!url || !url.includes('ted.com')) {
        return HttpResponse.json<SummaryResponse>({
          status: 'error',
          summary: '',
          message: 'Please provide a valid TED.com video link'
        }, { status: STATUS_CODES.BAD_REQUEST });
      }

      const finalSummary = createSummaryResponse(url, 'en');
      const videoId = extractVideoId(url);

      return HttpResponse.json<SummaryResponse>({
        summary: finalSummary,
        title: videoId,
        status: 'success'
      });

    } catch (error) {
      return HttpResponse.json<SummaryResponse>({
        status: 'error',
        summary: '',
        message: 'Error processing request'
      }, { status: STATUS_CODES.INTERNAL_SERVER_ERROR });
    }
  }),

  http.get(API_ENDPOINTS.STATUS, () => {
    return HttpResponse.json({ status: 'ok', timestamp: new Date().toISOString() });
  }),

  http.get(API_ENDPOINTS.VIDEO_INFO, async ({ request }) => {
    await delay(DELAYS.VIDEO_INFO);
    const url = new URL(request.url);
    const videoUrl = url.searchParams.get('url');

    if (!videoUrl) {
      return HttpResponse.json({ error: 'URL required' }, { status: STATUS_CODES.BAD_REQUEST });
    }

    const match = videoUrl.match(/ted\.com\/talks\/([^?]+)/);
    const videoId = match ? match[1] : 'unknown';

    return HttpResponse.json({
      title: videoId.replace(/_/g, ' ').replace(/-/g, ' '),
      duration: Math.floor(Math.random() * 900) + 300,
      speaker: "TED Speaker",
      available: true
    });
  })
];
