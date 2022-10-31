import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  photoCover:string = 'https://www.zup.com.br/wp-content/uploads/2021/03/5e32dc5538c14b0d4b28f87f_imagens-angular3.png'
  @Input()
  contentTitle:string = 'Esse projeto utiliza Angular, o que você acha disso?'
  @Input()
  contentDescription:string = 'Esse projeto utiliza Angular, o que você acha disso?'
  private id:string | null = "0"
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get('id')
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]
  
   this.contentTitle = result.title
   this.contentDescription = result.description
   this.photoCover = result.photoCover
  }
  
}
