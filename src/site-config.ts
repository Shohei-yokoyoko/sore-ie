export const siteConfig = {
  name: 'それ、家を決める前に。',
  description: '家を借りる・買う・建てる前に、迷いをほどく住宅ブログ。',
  concept: '家を借りるときも、買うときも、建てるときも。「それ先に知りたかった」をなくす住宅ブログ。',
};

export const categories = [
  { slug: 'rent', name: '賃貸', short: '借りる前後の疑問や、暮らしの困りごとを整理します。', icon: '鍵' },
  { slug: 'buy-or-rent', name: '家を買うか借りるか', short: '自分に合う住まい方を、焦らず考えるための情報です。', icon: '道' },
  { slug: 'custom-home', name: '注文住宅・家づくり', short: '家づくりの流れと、会社選びの判断材料をまとめます。', icon: '家' },
  { slug: 'used-home', name: '中古住宅・マンション', short: '中古物件を見るときに押さえたい視点を整理します。', icon: '窓' },
  { slug: 'moving', name: '引越し・新生活', short: '段取りや手続き、新生活の準備をわかりやすく。', icon: '箱' },
  { slug: 'housing-trouble', name: '入居後の住宅トラブル', short: '住み始めてからの困りごとに、落ち着いて向き合います。', icon: '灯' },
] as const;

export type CategorySlug = (typeof categories)[number]['slug'];
