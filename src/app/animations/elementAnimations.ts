import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
} from '@angular/animations';

export const ANIMATION_ELEMENT = 'element';

export const elementAnimations = trigger('elementAnimations', [
  transition(':enter, :increment, :decrement', [
    query(
      '.' + ANIMATION_ELEMENT,
      [
        style({ opacity: 0, transform: 'translateY(-15px)' }),
        stagger(75, [
          animate(
            '0.5s ease-in-out',
            style({ opacity: 1, transform: 'translateY(0)' })
          ),
        ]),
      ],
      { optional: true }
    ),
  ]),
  transition(':leave', [
    query(
      '.' + ANIMATION_ELEMENT,
      [
        stagger(75, [
          animate(
            '0.5s ease-in-out',
            style({ opacity: 0, transform: 'translateY(-15px)' })
          ),
        ]),
      ],
      { optional: true }
    ),
  ]),
  // when we're fetching data from api (* => *) this transition will help us bind values to our animation
  // and stagger our list if we have successfully fetched our data
  transition('* => *', [
    query(
      ':enter',
      [
        style({ opacity: 0, transform: 'translateY(-15px)' }),
        stagger(75, [
          animate(
            '0.5s ease-in-out',
            style({ opacity: 1, transform: 'translateY(0)' })
          ),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);
