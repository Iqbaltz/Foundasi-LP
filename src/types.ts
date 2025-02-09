export type Lang = 'id' | 'en'

export type LocalizedString = Record<Lang, string>

export type LocalizedObject<T extends string> = Record<T, LocalizedString>
