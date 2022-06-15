import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
title:string = 'Some marvel Movies';
poster: string = 'Enter the number to see the poster and the ratings of the movies';
num:number | undefined;
  movie:movie[]=[
    {title:'Spiderman: No way home', director:'Jon Watts',cast:'Tom Holland, Zendaya, Andrew Garfield', releaseDate:'17 Dec 2021'},
    {title:'Avengers:Infinty war', director:'Joe Russo', cast:'Robert Downey Jr, Scarlett Johansson, Chris Evans', releaseDate:'25 April 2018'},
    {title:'Avengers: Endgame', director:'Joe Russo', cast:'Robert Downey Jr, Scarlett Johansson, Chris Evans', releaseDate: '26 April 2019'},
    {title:'Doctor Strange:Multiverse of Madness', director: 'Scott Derrickson', cast:'Elizabeth olsen, Benedict Cumberbatch, Rachel McAdams', releaseDate: '6 May 2022'}
  ]
  constructor() { }

  ngOnInit(): void {
  }
 
customfn(index: any,item:any){
  return item.cast;
}
}
class movie{
  title: string | undefined;
  director: string | undefined;
  cast: string | undefined;
  releaseDate:string | undefined;


}
