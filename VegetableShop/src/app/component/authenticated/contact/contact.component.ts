import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import emailjs, {EmailJSResponseStatus} from '@emailjs/browser';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    @ViewChild('contactForm')
    contactForm: NgForm;


    constructor() {
        emailjs.init("ZMVQv0o6piZ7BRGkb")
    }


    onSubmit() {
        console.log(this.contactForm.value.form_email, this.contactForm.value.form_subject, this.contactForm.value.form_message)

        const contactParam = {
            subject: this.contactForm.value.form_subject,
            to_name: "vegetable shop",
            user_email: this.contactForm.value.form_email,
            message: this.contactForm.value.form_message,
            name: this.contactForm.value.name,
        }

        emailjs.send("service_jxun1gl",
            "template_yz9sj0t",

            contactParam).then(
            function (res) {
                alert("SUCCESS")
            },
            function (err) {
                alert("FAIL")
            }
        )
    }

    ngOnInit(): void {
    }

}
