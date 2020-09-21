export class Goal {
  id: number;
  name: string;
  description: string;
  completeDate: Date;
  showDescription: boolean;

  constructor(
    id: number,
    name: string,
    description: string,
    completeDate: Date
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.completeDate = completeDate;
    this.showDescription = false;
  }
}
