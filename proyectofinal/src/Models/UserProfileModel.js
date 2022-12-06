export class UserProfileModel {
    constructor (userId=null, profiles=[]) {
        this.userId = userId;
        this.profiles = profiles;
    }
}