class TestimonialData {
  constructor() {
    this.names = [
      'Kerrie S. ',
      'Helen P.',
      'Merrilee M.',
      'Sue L.',
      'Jacqui P.',
      'San M.',
      'Susan O.',
      'Delwyn T.',
      'Lyn M.',
      'Jane R.',
      'Julie B.',
      'Donna C.',
      'Catherine C.',
      'Margot B.',
      'Lisa C.',
      'Megan B.',
      'leeanne L.',
      'Cheryl G.',
    ];
    this.dates = [
      '12 Aug 2022',
      '03 Jul 2022',
      '29 Aug 2022',
      '16 May 2022',
      '23 Jun 2022',
      '02 Aug 2022',
      '09 Dec 2022',
      '15 Feb 2022',
      '31 Aug 2022',
    ];
    this.testimonialTitles = [
      'Loving all your clothes ❤️',
      'LOVE MY NEW VINE APPAREL DRESS',
      'Awesome!',
      'Best service ever',
      'On Point - Ponte Pants',
      'Luv yer stuff',
      'surprise',
      'Love love love it',
      'Love 💕 everything ',
      'Well done Vine Apparel',
      'Love Love Love ',
      'Love the Style',
      'Consistently fabulous!',
      'Best online shop',
      'Fantastic',
      'Love!',
      'Fast, efficient and great product',
      'Style and comfort',
      'Ginny dress',
    ];
    this.testimonialTexts = [
      'I am obsessed with vine clothing ! The cut and fit and variety I get many compliments when I wear my vibe clothes . The delivery is always prompt , one happy customer',
      'I took the chance and bought a dress online for the first time in a long time. True to vine’s amazing sizes, it fit! I received so many compliments. It’s nice to feel good in a dress again.',
      'Your team are amazing. Our orders arrive within the week every time. Package well, returns is easy and the items are great quality. Keep up the great work team Vine Apparel',
      'I love the Lottie dress. I wore it on a night out. I bought it in black. The material is so soft and it is really comfortable. I love how it fits on me. Looks great with ankle boots. Have more purchases coming this week. Yay. Easy to shop online and delivery is quick. Thanks Vine Apparel team ❤️',
      'Love the panel Jeans, comfy great fit, ordered and delivered in a few days. Have recommended to friends, Love the site and will definitely be ordering again.',
      'I have now made a couple of purchases from Vine Apparel and could not be happier. I was sceptical at first as I have had bad experiences with online purchases from other sites. I love my shirt, it looks even better on than in the pics.',
      'I’ve have purchased over twenty different items from Vine Apparel and every single purchase has arrived promptly, fitted perfectly, are affordable, versatile and on trend. Put simply, they are the best 😍',
      'I have ordered three cardigans from Vine Apparel this season. Two lighter ones and one warmer one. They are stylish and comfortable. I especially like that you can wear the lighter ones inside without becoming too hot. I have been very happy with my purchases.',
      'I now have four of the Charli Knit and get compliments every time I wear one of them. The colours are devine. Thanks Vine for an awesome shopping experience.',
      'I love everything I purchase from vine apparel. Sizes are great. Quality is great. Love love love it. Ive been disappointed once when I got a white large /xl Kylie knit and should of got sml . That’s my fault. Every else is amazing. I get a lot of compliments and tell everyone x',
      'I gotta say over lockdown I bought & received some pretty ordinary online purchased clothes but Vine always delivers Quality & always offers something different from the normal at a great price plus the wait time is always minimal Always excited to see whats new Thanks Vine Apparel Suzi',
      'Exactly what I wanted and more than I expected - a perfect fit, fast delivery and great price',
      'Wonderful pants that I wear to work, so comfortable but able to dress up for the office. Next time I would go the next size up. But these are perfect.',
      'I recently purchased several items from vine apparrell my purchases came within a week and I was informed every step of the way Very impressed with this company and would highly recommend them',
      'Awesome customer service. Fast delivery and great product!',
      'This beautiful dress arrived at my door within a week of purchasing online. So impressed with the effortless process of purchasing items through Vine Apparel, have loved every single item….this is my favourite “go to” clothing site!',
      'Sorry for the late reply. Im absolutely loving all your clothes. They are amazing and fit my body, at this age, beautifully. Im trying to restrain myself but everything is so beautiful. Thank you ❤️🥰',
    ];
  }

  getRandomTestimonialValue = array => {
    return Math.floor(Math.random() * array.length);
  };

  getTestimonialName() {
    return this.names[this.getRandomTestimonialValue(this.names)];
  }

  getTestimonialDate() {
    return this.dates[this.getRandomTestimonialValue(this.dates)];
  }

  getTestimonialTitle() {
    return this.testimonialTitles[
      this.getRandomTestimonialValue(this.testimonialTitles)
    ];
  }

  getTestimonialText() {
    return this.testimonialTexts[
      this.getRandomTestimonialValue(this.testimonialTexts)
    ];
  }
}

export default TestimonialData;
