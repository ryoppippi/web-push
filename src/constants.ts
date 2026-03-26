export const ContentEncoding = {
	AES_128_GCM: 'aes128gcm',
} as const;

export type ContentEncodingType = (typeof ContentEncoding)[keyof typeof ContentEncoding];

export const Urgency = {
	VERY_LOW: 'very-low',
	LOW: 'low',
	NORMAL: 'normal',
	HIGH: 'high',
} as const;

export type UrgencyType = (typeof Urgency)[keyof typeof Urgency];

export const DEFAULT_TTL = 2419200;
