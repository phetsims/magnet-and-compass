// Copyright 2024, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Screen, { ScreenOptions } from '../../../joist/js/Screen.js';
import optionize from '../../../phet-core/js/optionize.js';
import MagnetAndCompassColors from '../common/MagnetAndCompassColors.js';
import magnetAndCompass from '../magnetAndCompass.js';
import MagnetAndCompassModel from './model/MagnetAndCompassModel.js';
import MagnetAndCompassScreenView from './view/MagnetAndCompassScreenView.js';
import MagnetAndCompassStrings from '../MagnetAndCompassStrings.js';

type SelfOptions = {
  //TODO add options that are specific to MagnetAndCompassScreen here
};

type MagnetAndCompassScreenOptions = SelfOptions & ScreenOptions;

export default class MagnetAndCompassScreen extends Screen<MagnetAndCompassModel, MagnetAndCompassScreenView> {

  public constructor( providedOptions: MagnetAndCompassScreenOptions ) {

    const options = optionize<MagnetAndCompassScreenOptions, SelfOptions, ScreenOptions>()( {
      name: MagnetAndCompassStrings.screen.nameStringProperty,

      //TODO add default values for optional SelfOptions here

      //TODO add default values for optional ScreenOptions here
      backgroundColorProperty: MagnetAndCompassColors.screenBackgroundColorProperty
    }, providedOptions );

    super(
      () => new MagnetAndCompassModel( { tandem: options.tandem.createTandem( 'model' ) } ),
      model => new MagnetAndCompassScreenView( model, { tandem: options.tandem.createTandem( 'view' ) } ),
      options
    );
  }
}

magnetAndCompass.register( 'MagnetAndCompassScreen', MagnetAndCompassScreen );