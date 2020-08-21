import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public form: FormGroup;
 
  constructor( public postService: PostService,  private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl([ '', Validators.required ]),
      content: new FormControl([ '', Validators.required ])
    });
  }
   
  get f(){
    return this.form.controls;
  }
    
  onSubmit(){
    console.log(this.form.value);
    this.postService.create(this.form.value).subscribe(res => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('post/index');
    })
  }
}