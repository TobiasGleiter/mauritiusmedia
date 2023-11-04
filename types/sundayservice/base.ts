type Workflow = {
  name: string;
  team: string;
};

type SundayService = {
  _id: {
    $oid: string;
  };
  name: string;
  description: string;
  location: string;
  date: string;
  workflow: Workflow[];
};
