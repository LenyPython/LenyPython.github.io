export interface sectionInterface {
  sectionId: string;
  component: {
    template: string;
    props: any;
  };
  Title: string;
  img: string;
}
interface contentInterface {
  sections: sectionInterface[];
}
export const content: contentInterface = {
  sections: [
    {
      sectionId: 'Hero',
      component: {
        template: '~/components/Section/Hero/index.vue',
        props: {
          text: 'SOme hero text'
        }
      },
      Title: 'Hero section title',
      img: 'src/'
    },
    {
      sectionId: 'Projects',
      component: {
        template: '~/components/Section/Projects/index.vue',
        props: {
          text: 'SOme hero text'
        }
      },
      Title: 'Projects section title',
      img: 'src/'
    }
  ]
};
