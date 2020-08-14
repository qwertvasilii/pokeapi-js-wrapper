import {Description, Name, NamedAPIResource} from './Common';
import {Region} from './Locations';
import {Move, MoveLearnMethod} from './Moves';
import {Ability, PokemonSpecies, Type} from './Pokemon';

/**
 * A generation is a grouping of the Pokémon games that separates them based on the Pokémon they include. 
 * In each generation, a new set of Pokémon, Moves, Abilities and Types that did not exist in the previous generation are released.
 */
export type Generation = {
    /**
     * The identifier for this resource.
     */
    id: number;
    /**
     * The name for this resource.
     */
    name: string;
    /**
     * A list of abilities that were introduced in this generation.
     */
    abilities: NamedAPIResource<Ability>[];
    /**
     * The name of this resource listed in different languages.
     */
    names: Name[];
    /**
     * The main region travelled in this generation.
     */
    main_region: NamedAPIResource<Region>;
    /**
     * A list of moves that were introduced in this generation.
     */
    moves: NamedAPIResource<Move>[];
    /**
     * A list of Pokémon species that were introduced in this generation.
     */
    pokemon_species: NamedAPIResource<PokemonSpecies>[];
    /**
     * A list of types that were introduced in this generation.
     */
    types: NamedAPIResource<Type>[];
    /**
     * A list of version groups that were introduced in this generation.
     */
    version_groups: NamedAPIResource<VersionGroup>[];
};

/**
 * A Pokédex is a handheld electronic encyclopedia device; one which is capable of recording and 
 * retaining information of the various Pokémon in a given region with the exception of the national dex 
 * and some smaller dexes related to portions of a region. 
 * See {@link https://bulbapedia.bulbagarden.net/wiki/Pokedex Bulbapedia} for greater detail.
 */
export type Pokedex = {
    /**
     * The identifier for this resource.
     */
    id: number;
    /**
     * The name for this resource.
     */
    name: string;
    /**
     * Whether or not this Pokédex originated in the main series of the video games.
     */
    is_main_series: boolean;
    /**
     * The description of this resource listed in different languages.
     */
    descriptions: Description[];
    /**
     * The name of this resource listed in different languages.
     */
    names: Name[];
    /**
     * A list of Pokémon catalogued in this Pokédex and their indexes.
     */
    pokemon_entries: PokemonEntry[];
    /**
     * The region this Pokédex catalogues Pokémon for.
     */
    region: NamedAPIResource<Region>;
    /**
     * A list of version groups this Pokédex is relevant to.
     */
    version_groups: NamedAPIResource<VersionGroup>[];
};

export type PokemonEntry = {
    /**
     * The index of this Pokémon species entry within the Pokédex.
     */
    entry_number: number;
    /**
     * The Pokémon species being encountered.
     */
    pokemon_species: NamedAPIResource<PokemonSpecies>;
};

/**
 * Versions of the games, e.g., Red, Blue or Yellow.
 */
export type Version = {
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
     * The version group this version belongs to.
     */
    version_group: NamedAPIResource<VersionGroup>;
};

/**
 * Version groups categorize highly similar versions of the games.
 */
export type VersionGroup = {
    /**
     * The identifier for this resource.
     */
    id: number;
    /**
     * The name for this resource.
     */
    name: string;
    /**
     * Order for sorting. Almost by date of release, except similar versions are grouped together.
     */
    order: number;
    /**
     * The generation this version was introduced in.
     */
    generation: NamedAPIResource<Generation>;
    /**
     * A list of methods in which Pokémon can learn moves in this version group.
     */
    move_learn_methods: NamedAPIResource<MoveLearnMethod>[];
    /**
     * A list of Pokédexes introduces in this version group.
     */
    pokedexes: NamedAPIResource<Pokedex>[];
    /**
     * A list of regions that can be visited in this version group.
     */
    regions: NamedAPIResource<Region>[];
    /**
     * The versions this version group owns.
     */
    versions: NamedAPIResource<Version>[];
};
