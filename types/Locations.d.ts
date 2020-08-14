import {GenerationGameIndex, Name, NamedAPIResource, VersionEncounterDetail} from './Common';
import {EncounterMethod} from './Encounters';
import {Generation, Pokedex, Version, VersionGroup} from './Games';
import {Pokemon, PokemonSpecies} from './Pokemon';

/**
 * Locations that can be visited within the games. Locations make up sizable portions of regions, like cities or routes.
 */
export type Location = {
    /**
     * The identifier for this resource.
     */
    id: number;
    /**
     * The name for this resource.
     */
    name: string;
    /**
     * The region this location can be found in.
     */
    region: NamedAPIResource<Region>;
    /**
     * The name of this resource listed in different languages.
     */
    names: Name[];
    /**
     * A list of game indices relevent to this location by generation.
     */
    game_indices: GenerationGameIndex[];
    /**
     * Areas that can be found within this location.
     */
    areas: NamedAPIResource<LocationArea>[];
};

/**
 * Location areas are sections of areas, such as floors in a building or cave. Each area has its own set of possible Pokémon encounters.
 */
export type LocationArea = {
    /**
     * The identifier for this resource.
     */
    id: number;
    /**
     * The name for this resource.
     */
    name: string;
    /**
     * The internal id of an API resource within game data.
     */
    game_index: number;
    /**
     * A list of methods in which Pokémon may be encountered in this area and how likely the method will occur depending on the version of the game.
     */
    encounter_method_rates: EncounterMethodRate[];
    /**
     * The region this location area can be found in.
     */
    location: NamedAPIResource<Location>;
    /**
     * The name of this resource listed in different languages.
     */
    names: Name[];
    /**
     * A list of Pokémon that can be encountered in this area along with version specific details about the encounter.
     */
    pokemon_encounters: PokemonEncounter[];
};

export type EncounterMethodRate = {
    /**
     * The method in which Pokémon may be encountered in an area.
     */
    encounter_method: NamedAPIResource<EncounterMethod>;
    /**
     * The chance of the encounter to occur on a version of the game.
     */
    version_details: EncounterVersionDetails[];
};

export type EncounterVersionDetails = {
    /**
     * The chance of an encounter to occur.
     */
    rate: number;
    /**
     * The version of the game in which the encounter can occur with the given chance.
     */
    version: NamedAPIResource<Version>;
};

export type PokemonEncounter = {
    /**
     * The Pokémon being encountered.
     */
    pokemon: NamedAPIResource<Pokemon>;
    /**
     * A list of versions and encounters with Pokémon that might happen in the referenced location area.
     */
    version_details: VersionEncounterDetail[];
};

/**
 * Areas used for grouping Pokémon encounters in Pal Park. They're like habitats that are specific to {@link https://bulbapedia.bulbagarden.net/wiki/Pal_Park Pal Park}.
 */
export type PalParkArea = {
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
     * A list of Pokémon encountered in thi pal park area along with details.
     */
    pokemon_encounters: PalParkEncounterSpecies[];
};

export type PalParkEncounterSpecies = {
    /**
     * The base score given to the player when this Pokémon is caught during a pal park run.
     */
    base_score: number;
    /**
     * The base rate for encountering this Pokémon in this pal park area.
     */
    rate: number;
    /**
     * The Pokémon species being encountered.
     */
    pokemon_species: NamedAPIResource<PokemonSpecies>;
};

/**
 * A region is an organized area of the Pokémon world. Most often, the main difference between regions is the species of Pokémon that can be encountered within them.
 */
export type Region = {
    /**
     * The identifier for this resource.
     */
    id: number;
    /**
     * A list of locations that can be found in this region.
     */
    locations: NamedAPIResource<Location>[];
    /**
     * The name for this resource.
     */
    name: string;
    /**
     * The name of this resource listed in different languages.
     */
    names: Name[];
    /**
     * The generation this region was introduced in.
     */
    main_generation: NamedAPIResource<Generation>;
    /**
     * A list of pokédexes that catalogue Pokémon in this region.
     */
    pokedexes: NamedAPIResource<Pokedex>[];
    /**
     * A list of version groups where this region can be visited.
     */
    version_groups: NamedAPIResource<VersionGroup>[];
};
