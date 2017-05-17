export class Account {
      public accountId: string;
      public title: string;
      public name: string;
      public icon: string;

      constructor(accountId: string, title: string = "", name: string = "", icon: string = "") {
            this.title = title;
            this.name = name;
            this.icon = icon;
      }
}
