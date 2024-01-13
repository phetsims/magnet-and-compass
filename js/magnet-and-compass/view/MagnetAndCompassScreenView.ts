// Copyright 2024, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import ScreenView, { ScreenViewOptions } from '../../../../joist/js/ScreenView.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import MagnetAndCompassConstants from '../../common/MagnetAndCompassConstants.js';
import magnetAndCompass from '../../magnetAndCompass.js';
import MagnetAndCompassModel from '../model/MagnetAndCompassModel.js';
import optionize from '../../../../phet-core/js/optionize.js';

type SelfOptions = {
 //TODO add options that are specific to MagnetAndCompassScreenView here
};

type MagnetAndCompassScreenViewOptions = SelfOptions & ScreenViewOptions;

export default class MagnetAndCompassScreenView extends ScreenView {

  public constructor( model: MagnetAndCompassModel, providedOptions: MagnetAndCompassScreenViewOptions ) {

    const options = optionize<MagnetAndCompassScreenViewOptions, SelfOptions, ScreenViewOptions>()( {

      //TODO add default values for optional SelfOptions here

      //TODO add default values for optional ScreenViewOptions here
    }, providedOptions );

    super( options );

    const resetAllButton = new ResetAllButton( {
      listener: () => {
        this.interruptSubtreeInput(); // cancel interactions that may be in progress
        model.reset();
        this.reset();
      },
      right: this.layoutBounds.maxX - MagnetAndCompassConstants.SCREEN_VIEW_X_MARGIN,
      bottom: this.layoutBounds.maxY - MagnetAndCompassConstants.SCREEN_VIEW_Y_MARGIN,
      tandem: options.tandem.createTandem( 'resetAllButton' )
    } );
    this.addChild( resetAllButton );
  }

  /**
   * Resets the view.
   */
  public reset(): void {
    //TODO
  }

  /**
   * Steps the view.
   * @param dt - time step, in seconds
   */
  public override step( dt: number ): void {
    //TODO
  }
}

magnetAndCompass.register( 'MagnetAndCompassScreenView', MagnetAndCompassScreenView );