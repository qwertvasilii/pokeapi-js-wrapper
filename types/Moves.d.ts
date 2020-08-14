import {APIResource, Description, MachineVersionDetail, Name, NamedAPIResource, VerboseEffect} from './Common';
import {ContestEffect, ContestName, SuperContextEffect} from './Contests';
import {Generation, VersionGroup} from './Games';
import {Language} from './Languages';
import {AbilityEffectChange, Stat, Type} from './Pokemon';

/**
 * Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move 
 * each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, 
 * usually for the purpose of removing obstacles or exploring new areas.
 */
export type Move = {
    /**
     * The identifier for this resource.
     */
    id: number;
    /**
     * The name for this resource.
     */
    name: string;
    /**
     * The percent value of how likely this move is to be successful.
     */
    accuracy: number;
    /**
     * The percent value of how likely it is this moves effect will happen.
     */
    effect_chance: number;
    /**
     * Power points. The number of times this move can be used.
     */
    pp: number;
    /**
     * A value between -8 and 8. Sets the order in which moves are executed during battle. 
     * See {@link https://bulbapedia.bulbagarden.net/wiki/Priority Bulbapedia} for greater detail.
     */
    priority: number;
    /**
     * The base power of this move with a value of 0 if it does not have a base power.
     */
    power: number;
    /**
     * A detail of normal and super contest combos that require this move.
     */
    contest_combos: ContestComboSets;
    /**
     * The type of appeal this move gives a Pokémon when used in a contest.
     */
    contest_type: NamedAPIResource<ContestName>;
    /**
     * The effect the move has when used in a contest.
     */
    contest_effect: APIResource<ContestEffect>;
    /**
     * The type of damage the move inflicts on the target, e.g. physical.
     */
    damage_class: NamedAPIResource<MoveDamageClass>;
    /**
     * The effect of this move listed in different languages.
     */
    effect_entries: VerboseEffect[];
    /**
     * The list of previous effects this move has had across version groups of the games.
     */
    effect_changes: AbilityEffectChange[];
    /**
     * The flavor text of this move listed in different languages.
     */
    flavor_text_entries: MoveFlavorText[];
    /**
     * The generation in which this move was introduced.
     */
    generation: NamedAPIResource<Generation>;
    /**
     * A list of the machines that teach this move.
     */
    machines: MachineVersionDetail[];
    /**
     * Metadata about this move
     */
    meta: MoveMetaData;
    /**
     * The name of this resource listed in different languages.
     */
    names: Name[];
    /**
     * A list of move resource value changes across version groups of the game.
     */
    past_values: PastMoveStatValues[];
    /**
     * A list of stats this moves effects and how much it effects them.
     */
    stat_changes: MoveStatChange[];
    /**
     * The effect the move has when used in a super contest.
     */
    super_contest_effect: APIResource<SuperContextEffect>;
    /**
     * The type of target that will receive the effects of the attack.
     */
    target: NamedAPIResource<MoveTarget>;
    /**
     * The elemental type of this move.
     */
    type: NamedAPIResource<Type>;
};

export type ContestComboSets = {
    /**
     * A detail of moves this move can be used before or after, granting additional appeal points in contests.
     */
    normal: ContestComboDetail;
    /**
     * A detail of moves this move can be used before or after, granting additional appeal points in super contests.
     */
    super: ContestComboDetail;
};

export type ContestComboDetail = {
    /**
     * A list of moves to use before this move.
     */
    use_before: NamedAPIResource<Move>[];
    /**
     * A list of moves to use after this move.
     */
    use_after: NamedAPIResource<Move>[];
};

export type MoveFlavorText = {
    /**
     * The localized flavor text for an api resource in a specific language.
     */
    flavor_text: string;
    /**
     * The language this name is in.
     */
    language: NamedAPIResource<Language>;
    /**
     * The version group that uses this flavor text.
     */
    version_group: NamedAPIResource<VersionGroup>;
};

export type MoveMetaData = {
    /**
     * The status ailment this move inflicts on its target.
     */
    ailment: NamedAPIResource<MoveAilment>;
    /**
     * The category of move this move falls under, e.g. damage or ailment.
     */
    category: NamedAPIResource<MoveCategory>;
    /**
     * The minimum number of times this move hits. Null if it always only hits once.
     */
    min_hits: number;
    /**
     * The maximum number of times this move hits. Null if it always only hits once.
     */
    max_hits: number;
    /**
     * The minimum number of turns this move continues to take effect. Null if it always only lasts one turn.
     */
    min_turns: number;
    /**
     * The maximum number of turns this move continues to take effect. Null if it always only lasts one turn.
     */
    max_turns: number;
    /**
     * HP drain (if positive) or Recoil damage (if negative), in percent of damage done.
     */
    drain: number;
    /**
     * The amount of hp gained by the attacking Pokemon, in percent of it's maximum HP.
     */
    healing: number;
    /**
     * Critical hit rate bonus.
     */
    crit_rate: number;
    /**
     * The likelihood this attack will cause an ailment.
     */
    ailment_chance: number;
    /**
     * The likelihood this attack will cause the target Pokémon to flinch.
     */
    flinch_chance: number;
    /**
     * The likelihood this attack will cause a stat change in the target Pokémon.
     */
    stat_chance: number;
};

export type MoveStatChange = {
    /**
     * The amount of change.
     */
    change: number;
    /**
     * The stat being affected.
     */
    stat: NamedAPIResource<Stat>;
};

export type PastMoveStatValues = {
    /**
     * The percent value of how likely this move is to be successful.
     */
    accuracy: number;
    /**
     * The percent value of how likely it is this moves effect will take effect.
     */
    effect_chance: number;
    /**
     * The base power of this move with a value of 0 if it does not have a base power.
     */
    power: number;
    /**
     * Power points. The number of times this move can be used.
     */
    pp: number;
    /**
     * The effect of this move listed in different languages.
     * 
     */
    effect_entries: VerboseEffect[];
    /**
     * The elemental type of this move.
     */
    type: NamedAPIResource<Type>;
    /**
     * The version group in which these move stat values were in effect.
     */
    version_group: NamedAPIResource<VersionGroup>;
};

/**
 * Move Ailments are status conditions caused by moves used during battle. 
 * See {@link http://bulbapedia.bulbagarden.net/wiki/http://bulbapedia.bulbagarden.net/wiki/Status_condition Bulbapedia} for greater detail.
 */
export type MoveAilment = {
    /**
     * The identifier for this resource.
     */
    id: number;
    /**
     * The name for this resource.
     */
    name: string;
    /**
     * A list of moves that cause this ailment.
     */
    moves: NamedAPIResource<Move>[];
    /**
     * The name of this resource listed in different languages.
     */
    names: Name[];
};

/**
 * Styles of moves when used in the Battle Palace. See {@link https://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(Generation_III) Bulbapedia} for greater detail.
 */
export type MoveBattleStyle = {
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
};

/**
 * Very general categories that loosely group move effects.
 */
export type MoveCategory = {
    /**
     * The identifier for this resource.
     */
    id: number;
    /**
     * The name for this resource.
     */
    name: string;
    /**
     * A list of moves that fall into this category.
     */
    moves: NamedAPIResource<Move>[];
    /**
     * The description of this resource listed in different languages.
     */
    descriptions: Description[];
};

/**
 * Damage classes moves can have, e.g. physical, special, or non-damaging.
 */
export type MoveDamageClass = {
    /**
     * The identifier for this resource.
     */
    id: number;
    /**
     * The name for this resource.
     */
    name: string;
    /**
     * The description of this resource listed in different languages.
     */
    descriptions: Description[];
    /**
     * A list of moves that fall into this damage class.
     */
    moves: NamedAPIResource<Move>[];
    /**
     * The name of this resource listed in different languages.
     */
    names: Name[];
};

/**
 * Methods by which Pokémon can learn moves.
 */
export type MoveLearnMethod = {
    /**
     * The identifier for this resource.
     */
    id: number;
    /**
     * The name for this resource.
     */
    name: string;
    /**
     * The description of this resource listed in different languages.
     */
    descriptions: Description[];
    /**
     * The name of this resource listed in different languages.
     */
    names: Name[];
    /**
     * A list of version groups where moves can be learned through this method.
     */
    version_groups: NamedAPIResource<VersionGroup>[];
};

/**
 * Targets moves can be directed at during battle. Targets can be Pokémon, environments or even other moves.
 */
export type MoveTarget = {
    /**
     * The identifier for this resource.
     */
    id: number;
    /**
     * The name for this resource.
     */
    name: string;
    /**
     * The description of this resource listed in different languages.
     */
    descriptions: Description[];
    /**
     * A list of moves that that are directed at this target.
     */
    moves: NamedAPIResource<Move>[];
    /**
     * The name of this resource listed in different languages.
     */
    names: Name[];
};
