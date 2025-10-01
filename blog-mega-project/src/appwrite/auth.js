import conf from '../conf/conf.js'
import {Client,Account,ID} from 'appwrite'

class AuthService {
    client = new Client()
    account;

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)
        this.account=new Account(this.client)
    }

    async createAccount({email,pass,name}){
        try {
            const userAcc= await this.account.create(ID.unique(),email,pass,name);

            if(userAcc){
                // call another method
                
                // success message and tell user to login orrr
                // directly login

                this.login({email,pass})
            }
            else {
                alert("Error")
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email,pass}){
        try {
            return await this.account.createEmailSession(email,pass)
        } catch (error) {
            throw error;
        }
    }

    async getCurrUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }

        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService