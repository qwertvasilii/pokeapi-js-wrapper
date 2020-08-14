import {BerryFlavor} from './Berries';
import {Effect, FlavorText, NamedAPIResource} from './Common';
import {Language} from './Languages';
import {Move} from './Moves';

/**
 * Contest types are categories judges used to weigh a Pokémon's condition in Pokémon contests. 
 * Check out {@link https://bulbapedia.bulbagarden.net/wiki/Contest_condition Bulbapedia} for greater detail.
 */
export type ContestType = {
    /**
     * The identifier for this resource.
     */
    id: number;
    /**
     * The name for this resource.
     */
    name: string;
    /**
     * The berry flavor that correlates with this contest type.
     */
    berry_flavor: NamedAPIResource<BerryFlavor>;
    /**
     * The name of this contest type listed in different languages.
     */
    names: ContestName[];
};

export type ContestName = {
    /**
     * The name for this contest.
     */
    name: string;
    /**
     * The color associated with this contest's name.
     */
    color: string;
    /**
     * The language that this name is in.
     */
    language: NamedAPIResource<Language>;
};

/**
 * Contest effects refer to the effects of moves when used in contests.
 */
export type ContestEffect = {
    /**
     * The identifier for this resource.
     */
    id: number;
    /**
     * The base number of hearts the user of this move gets.
     */
    appeal: number;
    /**
     * The base number of hearts the user's opponent loses.
     */
    jam: number;
    /**
     * The result of this contest effect listed in different languages.
     */
    effect_entries: Effect[];
    /**
     * The flavor text of this contest effect listed in different languages.
     */
    flavor_text_entries: FlavorText[];
};

/**
 * Super contest effects refer to the effects of moves when used in super contests.
 */
export type SuperContextEffect = {
    /**
     * The identifier for this resource.
     */
    id: number;
    /**
     * The level of appeal this super contest effect has.
     */
    appeal: number;
    /**
     * The flavor text of this super contest effect listed in different languages.
     */
    flavor_text_entries: FlavorText[];
    /**
     * A list of moves that have the effect when used in super contests.
     */
    moves: NamedAPIResource<Move>[];
};
