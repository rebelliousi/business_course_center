
import image2 from "../assets/img/opsy.jpg"
export interface AdviceType {
  id: number;
  title: string;
  description: string;
  imageCenter: string;
  leftSide: LeftSide[];
  rightSide: RightSide[];
}

interface LeftSide {
  title: string;
  description: string;
  id: number;
}

interface RightSide {
  title: string;
  description: string;
  id: number;
}

export interface AdviceType {
  id: number;
  title: string;
  description: string;
  imageCenter: string;
  leftSide: LeftSide[];
  rightSide: RightSide[];
}

interface LeftSide {
  title: string;
  description: string;
  id: number;
}

interface RightSide {
  title: string;
  description: string;
  id: number;
}

export const AdviceData: AdviceType[] = [
  {
    id: 1,
    title: "advice_section.title",
    description:
      "advice_section.description",
    imageCenter: image2,
    leftSide: [
      {
        id: 1,
        title: "advice_section.left_1",
        description:
          "lorem ipsum lorem ",
      },
      {
        id: 2,
         title: "advice_section.left_2",
        description:
          "lorem ipsum lorem",
      },
      {
        id: 3,
        title: "advice_section.left_3",
        description:
          "lorem ipsum lorem",
      },
    ],
    rightSide: [
      {
        id: 1,
        title: "advice_section.right_1",
        description:
            "lorem ipsum lorem",
      },
      {
        id: 2,
        title: "advice_section.right_2",
          description:
            "lorem ipsum lorem",
      },
      {
        id: 3,
        title: "advice_section.right_3",
        description:
            "lorem ipsum lorem",
      },
    ],
  },
    
   
];