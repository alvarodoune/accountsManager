export class User {
      constructor(public userId: string = "",
                  public name: string = "",
                  public lastName: string = "",
                  public documentType: string,
                  public document: string,
                  public email: string = "",
                  public password: string = "",
                  public imageUrl: string = "http://lorempixel.com/100/100/") {
      }
}
