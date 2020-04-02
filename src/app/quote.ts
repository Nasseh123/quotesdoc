import { Time } from '@angular/common';

export class Quote {
PersonSubmitted:boolean;
  name: any;
    constructor(
        public quote:string,
        public author:string,
        public personSubmitted:string,
        public upvote?:number,
        public downvote?:number,
        public entryDate?:Date,
        public entryTime?:Time
        ){
            this.PersonSubmitted=false;
            // this.upvote=0;
            // this.downvote=0;
        }
}
