import image1 from "../assets/img/opsy.jpg"
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

export const AdviceData:AdviceType[]=[
  {id:1,
  title:"Business Advise",
  description:"lorem lorem lorem",
  imageCenter:image1,
  leftSide:[{id:1,title:"title1",description:"lorem lorem lorem"},{id:2,title:"title1",description:"lorem lorem lorem"},{id:3,title:"title1",description:"lorem lorem lorem"}],
  rightSide:[{id:1,title:"title1",description:"lorem lorem lorem"},{id:2,title:"title1",description:"lorem lorem lorem"},{id:3,title:"title1",description:"lorem lorem lorem"}],


  }
]
