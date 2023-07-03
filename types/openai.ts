import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  GPT_3_5 = 'gpt-3.5-turbo',
  GPT_3_5_0613 = 'gpt-3.5-turbo-0613',
  GPT_3_5_16K = 'gpt-3.5-turbo-16k',
  GPT_3_5_16K_0613 = 'gpt-3.5-turbo-16k-0613',
  GPT_4 = 'gpt-4',
  GPT_4_0613 = 'gpt-4-0613',
  GPT_4_32K = 'gpt-4-32k',
  CLAUDE_PLUS = 'claude+',
  CLAUDE_INSTANT = 'claude-instant',
  CLAUDE_INSTANT_100K = 'claude-instant-100k',
  PALM_2 = 'chat-bison-001'
  BARD = 'bard',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_3_5;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.GPT_3_5]: {
    id: OpenAIModelID.GPT_3_5,
    name: 'GPT-3.5',
    maxLength: 12000,
    tokenLimit: 4096,
  },
  [OpenAIModelID.GPT_3_5_0613]: {
    id: OpenAIModelID.GPT_3_5_0613,
    name: 'GPT-3.5-0613',
    maxLength: 12000,
    tokenLimit: 4096,
  },
  [OpenAIModelID.GPT_3_5_16K]: {
    id: OpenAIModelID.GPT_3_5_16K,
    name: 'GPT-3.5-16K',
    maxLength: 48000,
    tokenLimit: 16384,
  },
  [OpenAIModelID.GPT_3_5_16K_0613]: {
    id: OpenAIModelID.GPT_3_5_16K_0613,
    name: 'GPT-3.5-16K-0613',
    maxLength: 48000,
    tokenLimit: 16384,
  },
  [OpenAIModelID.GPT_4]: {
    id: OpenAIModelID.GPT_4,
    name: 'GPT-4',
    maxLength: 24000,
    tokenLimit: 8192,
  },
  [OpenAIModelID.GPT_4_0613]: {
    id: OpenAIModelID.GPT_4_0613,
    name: 'GPT-4-0613',
    maxLength: 24000,
    tokenLimit: 8192,
  },
  [OpenAIModelID.GPT_4_32K]: {
    id: OpenAIModelID.GPT_4_32K,
    name: 'GPT-4-32K',
    maxLength: 96000,
    tokenLimit: 32768,
  },
  [OpenAIModelID.CLAUDE_PLUS]: {
    id: OpenAIModelID.CLAUDE_PLUS,
    name: 'Claude+',
    maxLength: 30000,
    tokenLimit: 10240,
  },
  [OpenAIModelID.CLAUDE_INSTANT]: {
    id: OpenAIModelID.CLAUDE_INSTANT,
    name: 'Claude Instant',
    maxLength: 30000,
    tokenLimit: 10240,
  },
  [OpenAIModelID.CLAUDE_INSTANT_100K]: {
    id: OpenAIModelID.CLAUDE_INSTANT_100K,
    name: 'Claude Instant 100K',
    maxLength: 300000,
    tokenLimit: 102400,
  },
  [OpenAIModelID.BARD]: {
    id: OpenAIModelID.BARD,
    name: 'Bard',
    maxLength: 30000,
    tokenLimit: 10240,
  },
  [OpenAIModelID.PALM_2]: {
    id: OpenAIModelID.PALM_2,
    name: 'Palm 2',
    maxLength: 30000,
    tokenLimit: 10240,
  },
};
