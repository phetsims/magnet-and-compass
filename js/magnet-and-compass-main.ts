// Copyright 2024, University of Colorado Boulder

/**
 * Main entry point for the 'Magnet and Compass' sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Sim, { SimOptions } from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import BarMagnetScreen from '../../faradays-electromagnetic-lab/js/bar-magnet/BarMagnetScreen.js';
import MagnetAndCompassStrings from './MagnetAndCompassStrings.js';
import FELConstants from '../../faradays-electromagnetic-lab/js/common/FELConstants.js';
import FELPreferences from '../../faradays-electromagnetic-lab/js/common/model/FELPreferences.js';
import PreferencesModel from '../../joist/js/preferences/PreferencesModel.js';
import FELPreferencesNode from '../../faradays-electromagnetic-lab/js/common/view/preferences/FELPreferencesNode.js';

// Unlike Faraday's Electromagnetic Lab, the 'Earth' checkbox should be visible by default.
// See https://github.com/phetsims/faradays-electromagnetic-lab/issues/23
if ( !QueryStringMachine.containsKey( 'addEarthCheckbox' ) ) {
  FELPreferences.addEarthCheckboxProperty.value = true;
}

simLauncher.launch( () => {

  const titleStringProperty = MagnetAndCompassStrings[ 'magnet-and-compass' ].titleStringProperty;

  const screens = [
    new BarMagnetScreen( Tandem.ROOT.createTandem( 'barMagnetScreen' ) )
  ];

  const options: SimOptions = {
    credits: FELConstants.CREDITS,
    phetioDesigned: true,
    preferencesModel: new PreferencesModel( {
      visualOptions: {
        supportsProjectorMode: true
      },
      simulationOptions: {
        customPreferences: [ {
          createContent: tandem => new FELPreferencesNode( {
            tandem: tandem.createTandem( 'simPreferences' )
          } )
        } ]
      }
    } )
  };

  const sim = new Sim( titleStringProperty, screens, options );
  sim.start();
} );