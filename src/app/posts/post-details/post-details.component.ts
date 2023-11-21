import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  @Input() post: { id: number, title: string, content: string } | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
