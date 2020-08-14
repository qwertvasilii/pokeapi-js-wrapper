import {NamedAPIResource} from './Common';
import {VersionGroup} from './Games';
import {Item} from './Items';
import {Move} from './Moves';

/**
 * Machines are the representation of items that teach moves to Pokémon. They vary from version to version, 
 * so it is not certain that one specific TM or HM corresponds to a single Machine.
 */
export type Machine = {
    /**
     * The identifier for this resource.
     */
    id: number;
    /**
     * The TM or HM item that corresponds to this machine.
     */
    item: NamedAPIResource<Item>;
    /**
     * The move that is taught by this machine.
     */
    move: NamedAPIResource<Move>;
    /**
     * The version group that this machine applies to.
     */
    version_group: NamedAPIResource<VersionGroup>;
};
