import BaseEntity from '../BaseEntity.js';
import { stripIndent } from '../utils.js';

class Map extends BaseEntity {
  describe() {
    const { location } = this.player;
    const find = location.id;
    const replace = `<span class="current-location">${location.id}</span>`;
    const map = this.ascii.replace(find, replace);
    return `<div class="map">${map}</div>`;
  }

  pickUp() {
    this.moveNodeTo(this.player);
    return 'I’ve stuffed the <strong>map</strong> down my robe.';
  }

  get ascii() {
    return stripIndent`
                                               #################
                                               #               #
                      ###########              #               #
                      #         #              #      bar      #
                      #   inn   #              #               #
                      #         #              #               #
                      ###########              #################
                            |                /
                            —              /
                            |            /
    ############       #################       ##############       ###############
    #          #       #               #       #            #       #             #
    #   bank   #———|———#   courtyard   #———————#   church   #———|———#   library   #
    #          #       #               #       #            #       #             #
    ############       #################       ##############       ###############
                           |             \\                      ~~
                           |               \\                   ~
                           |                 \\               #  #
                           |                   \\             #  #
                           |                     #############  ####
                           |                     #                 #
                           |                     #     forgery     #
                           |                     #                 #
                           |                     ###################
                           |
                           |
    ################################     #######################     #################################
    #                     ~~~~     #     #                     #     #                               #
    #   road_to_castle     ~~~~    #——|——#   castle_entrance   #——|——#                               #
    #                        ~~~~  #     #                     #     #                               #
    ################################     #######################     #                               #
                                                                     #                               #
                                                                     #                               #
                                                                     #             castle            #
                                                                     #                               #
                                                                     #                               #
                                                                     #                               #
                                                                     #                               #
                                                                     #                               #
                                                                     #                               #
                                                                     #################################
    `;
  }
}

export default Map;
