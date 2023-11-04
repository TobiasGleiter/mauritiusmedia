export type Workflow = {
  name: string;
  team: string;
};

export type SundayService = {
  _id: string;
  name: string;
  description: string;
  location: string;
  date: string;
  workflow: Workflow[];
};
