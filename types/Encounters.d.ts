import {Name, NamedAPIResource} from './Common';

/**
 * Methods by which the player might can encounter Pokémon in the wild, e.g., walking in tall grass. 
 * Check out {@link https://bulbapedia.bulbagarden.net/wiki/Wild_Pokémon Bulbapedia} for greater detail.
 */
export type EncounterMethod = {
    /**
     * The identifier for this resource.
     */
    id: number;
    /**
     * The name for this resource.
     */
    name: string;
    /**
     * A good value for sorting.
     */
    order: number;
    /**
     * The name of this resource listed in different languages.
     */
    names: Name[];
};

/**
 * Conditions which affect what pokemon might appear in the wild, e.g., day or night.
 */
export type EncounterCondition = {
    /**
     * The identifier for this resource.
     */
    id: number;
    /**
     * The name for this resource.
     */
    name: string;
    /**
     * The name of this resource listed in different languages.
     */
    names: Name[];
    /**
     * A list of possible values for this encounter condition
     */
    values: NamedAPIResource<EncounterConditionValue>[];
};

/**
 * Encounter condition values are the various states that an encounter condition can have, i.e., time of day can be either day or night.
 */
export type EncounterConditionValue = {
    /**
     * The identifier for this resource.
     */
    id: number;
    /**
     * The name for this resource.
     */
    name: string;
    /**
     * The condition this encounter condition value pertains to.
     */
    condition: NamedAPIResource<EncounterCondition>;
    /**
     * The name of this resource listed in different languages.
     */
    names: Name[];
};
