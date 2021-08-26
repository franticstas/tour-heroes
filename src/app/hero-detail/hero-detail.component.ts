import {Component, OnInit} from '@angular/core'
import {Location} from '@angular/common'
import {ActivatedRoute} from '@angular/router'
import {Hero} from '../hero'
import {HeroService} from '../hero.service'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.template.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  hero: Hero

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.getHero()
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero))
  }

  goBack(): void {
    this.location.back()
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack())
    }
  }
}
