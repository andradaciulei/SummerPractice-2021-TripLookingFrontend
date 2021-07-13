export class Trip {
  id?: string;
  title: string;
  description: string;
  private: boolean;

  public constructor(title: string, description: string, privateFlag: boolean) {
    this.title = title;
    this.description = description;
    this.private = privateFlag;
  }
}
