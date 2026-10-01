export const CONTACT_FIELDS = {
  name: {
    name: "name",
    label: "お名前",
    type: "text",
    required: true,
    placeholder: "山田 太郎",
  },

  furigana: {
    name: "furigana",
    label: "ふりがな",
    type: "text",
    required: true,
    placeholder: "やまだ たろう",
  },

  company: {
    name: "company",
    label: "会社名",
    type: "text",
    required: false,
    placeholder: "会社名〇〇",
  },

  email: {
    name: "email",
    label: "メールアドレス",
    type: "email",
    required: true,
    placeholder: "your.email@example.com",
  },

  message: {
    name: "message",
    label: "お問い合わせ内容",
    type: "textarea",
    required: true,
    placeholder: "お問い合わせ内容を入力してください",
  },
} as const;