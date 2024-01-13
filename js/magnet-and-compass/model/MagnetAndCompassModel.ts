// Copyright 2024, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import magnetAndCompass from '../../magnetAndCompass.js';
import { PhetioObjectOptions } from '../../../../tandem/js/PhetioObject.js';
import PickRequired from '../../../../phet-core/js/types/PickRequired.js';
import TModel from '../../../../joist/js/TModel.js';

type SelfOptions = {
  //TODO add options that are specific to MagnetAndCompassModel here
};

type MagnetAndCompassModelOptions = SelfOptions & PickRequired<PhetioObjectOptions, 'tandem'>;

export default class MagnetAndCompassModel implements TModel {

  public constructor( providedOptions: MagnetAndCompassModelOptions ) {
    //TODO
  }

  /**
   * Resets the model.
   */
  public reset(): void {
    //TODO
  }

  /**
   * Steps the model.
   * @param dt - time step, in seconds
   */
  public step( dt: number ): void {
    //TODO
  }
}

magnetAndCompass.register( 'MagnetAndCompassModel', MagnetAndCompassModel );