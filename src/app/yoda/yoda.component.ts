import { Component, OnInit } from '@angular/core';
import { Question } from '../common/models/question';

@Component({
  selector: 'app-yoda',
  templateUrl: './yoda.component.html',
  styleUrls: ['./yoda.component.css']
})
export class YodaComponent implements OnInit {

  public answers: number[] = [];
  public average: number;
  public questions: Question[] = [
    {
      id: '1',
      title: 'Aimes-tu les logiciels libres ?',
      answer: true,
      score: 3
    },
    {
      id: '2',
      title: 'La force a-t-elle créé Linux ?',
      answer: true,
      score: 1
    },
    {
      id: '3',
      title: `Est-ce que le code, c'est la vie ?`,
      answer: true,
      score: 2
    },
    {
      id: '4',
      title: 'Préfères-tu les GUI au CLI ?',
      answer: false,
      score: 3
    },
    {
      id: '5',
      title: `L'histoire de la force a-t-elle écrite par Git ?`,
      answer: true,
      score: 2
    },
    {
      id: '6',
      title: 'La documentation est-elle le meilleur ami de la force ?',
      answer: true,
      score: 2
    },
    {
      id: '7',
      title: `Penses-tu que tester c'est douter ?`,
      answer: false,
      score: 1
    },
    {
      id: '8',
      title: 'Javascript est-il le Java du web ?',
      answer: false,
      score: 1
    },
    {
      id: '9',
      title: `L'open source se situe dans les Alpes ?`,
      answer: false,
      score: 4
    },
    {
      id: '10',
      title: 'Angular est-il une pierre magique ?',
      answer: false,
      score: 1
    }
  ];
  public checked: boolean;

  constructor() { }

  ngOnInit() {
  }

  onGetAnswer(result: any): void {
    this.answers.push(result);
  }
  onClick() {
    const reducer = (acc: number, Val: number) => acc + Val;
    this.average = this.answers.reduce(reducer);
    if (this.average > 12) {
      this.checked = true;
    } else {
      this.checked = false;
    }

  }

}
