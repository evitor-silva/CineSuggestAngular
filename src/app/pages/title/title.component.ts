import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms';
import {api} from "../../utils/api";

@Component({
  selector: 'app-home',
  templateUrl: 'title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  data: any;
  commentForm: FormGroup;
  loading = false;

  constructor() {
    this.commentForm = new FormGroup({
      text: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  ngOnInit(): void {

    api().get('/filme/1')
      .then(response => {
        this.data = response.data;
      })
      .catch(error => {
        console.error("Erro ao carregar dados:", error);

      })

    this.data = {
      'duration': 2.4,
      'img': 'https://image.tmdb.org/t/p/original/ehBNf4ZO2xITFRC4KXr2v7rNeY3.jpg',
      'title': 'Gato de botas',
      'description': 'Muito antes de conhecer o ogro Shrek e sua turma, Gato de Botas (Antonio Banderas) vai viver uma grande aventura ao lado de Humpty Dumpty (Zach Galifianakis) e Kitty Pata Mansa (Salma Hayek). Dipostos a roubar os feijões mágicos do casal fora da lei Jack (Billy Bob Thornton) e Jill (Amy Sedaris), o trio quer mesmo é botar as mãos na famosa gansa que bota ovos de ouro. Mas algumas coisas não estavam nos planos e Gato vai descobrir, meio atrasado, que tem um grande problema pela frente para conseguir limpar o que ficou para trás: a  sua honra.',
      'episodes': 1,
      'type': 'Filme',
      'rating': 9,
      "comments": [
        { author: 'User', text: 'Melhor Filme já feito' },
        { author: 'Maria', text: 'Gostei muito do final' }
      ]
    }
  }

  onSubmit() {
    if (this.commentForm.valid) {
      this.loading = true;

      // Simulate API call
      setTimeout(() => {
        this.data.comments.push({
          author: 'User',
          text: this.commentForm.value.text
        });

        this.commentForm.reset();
        this.loading = false;
      }, 1000);
    }
  }
}
