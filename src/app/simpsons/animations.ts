import { BrowserModule } from '@angular/platform-browser';
import { animation, style, animate, trigger, transition, useAnimation, state, query, AnimationMetadata, group, keyframes } from '@angular/animations';
import { Optional } from '@angular/core';

export const animated = trigger('routeAnimations', [
  transition('* <=> *',[
      query(':enter, :leave',[
          style({
              position: 'absolute',
              left:0,
              width: '100%',
              opacity:0,
              transform: 'scale(0) translateY(100%)'
          })
      ],{optional:true}),
          query(':enter',[
              animate('600ms ease',
              style({opacity:1, transform: 'scale(1) translateY(0)'}))
          ],{optional:true})
  ]),
]);
export const slider =
    trigger('routeAnimations2',[
        transition ('* => isLeft',slideTo('left')),
        transition('* => isRight', slideTo('right'))
    ]);
export const stepper = 
    trigger('routeAnimations3',[
        transition('* <=> *',[
            query(':enter, :leave',[
                style({
                    position: 'absolute',
                    right: 0,
                    width: '100%'
                })
            ],{optional:true}),
            group([
                
                query(':enter',[
                    animate('2000ms ease',keyframes([
                        style({transform: 'scale(0) translateX(100%)', offset: 0}),
                        style({transform:'scale(0.5) translateX(50%)',offset: 0.3}),
                        style({transform:'scale(1) translate(25%)',offset: 1})
                    ]))
                ],{optional:true}),
                query(':leave',[
                    animate('2000ms ease',keyframes([
                        style({transform: 'scale(1)', offset: 0}),
                        style({transform:'scale(0.5) translateX(-25%)  rotate(0)',offset: 0.3}),
                        style({opacity:0, transform:'translateX(-80%) translateZ(-10px) rotate(180deg) scale(4)',offset: 1})
                    ]))
                ],{optional:true}),
            ])
        ])
    ])

function slideTo(direction: string):AnimationMetadata[] {
    const optional = {optional: true};
    return [
        query(':enter, :leave',[
            style({
                position:'absolute',
                top:'0px',
                [direction]:0,
                width:'100%'
            })
        ],optional),
        query(':enter',[
            style({ [direction]: '-100%' })
        ]),
        group([
            query(':leave',[
                animate('600ms ease',style({
                    [direction]: '100%'
                }))
            ],optional),
            query(':enter',[
                animate('600ms ease',style({
                    [direction]: '0'
                }))
            ],optional),
        ])
    ]
};