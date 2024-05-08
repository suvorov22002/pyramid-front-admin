import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Game } from '../../../@core/data/game';
import { GameService } from '../../../@core/services/game.service';

@Component({
  selector: 'ngx-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit{

  allGame$: ReplaySubject<Game[]> = new ReplaySubject(1);

  constructor(private gameservice: GameService){
   
  }

  ngOnInit(): void {
    this.onLoadGame();
  }


  onLoadGame() {
    this.gameservice.listAllgames().subscribe(
      {
        next: (data: Game[]) => {
          console.log("Game:",data)
          this.allGame$.next(data)
        },
        error: () => {
          console.log("error")
          setTimeout(() => {
            this.onLoadGame()
          }, 5000)
        }
      }
    )
  }

}
