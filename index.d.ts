import {Berry, BerryFirmness, BerryFlavor} from './types/Berries';
import {ContestEffect, ContestType, SuperContextEffect} from './types/Contests';
import {EncounterCondition, EncounterConditionValue, EncounterMethod} from './types/Encounters';
import {EvolutionChain, EvolutionTrigger} from './types/Evolution';
import {Generation, Version, VersionGroup} from './types/Games';
import {Item, ItemAttribute, ItemCategory, ItemFlingEffect, ItemPocket} from './types/Items';
import {Location, LocationArea, PalParkArea, Region} from './types/Locations';
import {Machine} from './types/Machines';
import {
    Move,
    MoveAilment,
    MoveBattleStyle,
    MoveCategory,
    MoveDamageClass,
    MoveLearnMethod,
    MoveTarget
} from './types/Moves';
import {
    Ability,
    Characteristic,
    EggGroup,
    Gender,
    GrowthRate,
    Nature,
    PokeathlonStat,
    Pokemon,
    PokemonColor,
    PokemonForm,
    PokemonHabitat,
    PokemonShape,
    PokemonSpecies,
    Stat,
    Type
} from './types/Pokemon';
import {NamedAPIResource} from './types/Common';
import {Language} from './types/Languages';
import {Endpoints} from './types/Endpoints';

type PokedexConfig = {
    protocol: string;
    hostName: string;
    versionPath: string;
    timeout: number;
    cache: boolean;
    offset: number;
    limit: number;
};

type getByName<T> = (name: string | number | Array<string | number>) => Promise<T | T[]>;
type getById<T> = (id: number | Array<number>) => Promise<T | T[]>;
type getList<T> = (
    interval?: {limit: number; offset: number}
) => Promise<{count: number; next: string; previous: string; results: NamedAPIResource<T>[]}>;

export class Pokedex {
    constructor(config?: PokedexConfig);
    resource: (path: string | string[]) => Promise<JSON>;

    /**
     * Berries are small fruits that can provide HP and status condition restoration, stat enhancement, 
     * and even damage negation when eaten by Pokémon. Check out {@link https://bulbapedia.bulbagarden.net/wiki/Berry Bulbapedia} 
     * for greater detail.
     */
    getBerryByName: getByName<Berry>;

    /**
     * Berries can be soft or hard. Check out {@link https://bulbapedia.bulbagarden.net/wiki/Category:Berries_by_firmness Bulbapedia} for greater detail.
     */
    getBerryFirmnessByName: getByName<BerryFirmness>;
    /**
     * Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their {@link https://pokeapi.co/docs/v2#natures nature}. 
     * Check out {@link https://bulbapedia.bulbagarden.net/wiki/Flavor Bulbapedia} for greater detail.
     */
    getBerryFlavorByName: getByName<BerryFlavor>;

    /**
     * Contest types are categories judges used to weigh a Pokémon's condition in Pokémon contests. 
     * Check out {@link https://bulbapedia.bulbagarden.net/wiki/Contest_condition Bulbapedia} for greater detail.
     */
    getContestTypeByName: getByName<ContestType>;

    /**
     * Contest effects refer to the effects of moves when used in contests.
     */
    getContestEffectById: getById<ContestEffect>;

    /**
     * Super contest effects refer to the effects of moves when used in super contests.
     */
    getSuperContestEffectById: getById<SuperContextEffect>;

    /**
     * Methods by which the player might can encounter Pokémon in the wild, e.g., walking in tall grass. 
     * Check out {@link https://bulbapedia.bulbagarden.net/wiki/Wild_Pokémon Bulbapedia} for greater detail.
     */
    getEncounterMethodByName: getByName<EncounterMethod>;

    /**
     * Conditions which affect what pokemon might appear in the wild, e.g., day or night.
     */
    getEncounterConditionByName: getByName<EncounterCondition>;

    /**
     * Encounter condition values are the various states that an encounter condition can have, i.e., time of day can be either day or night.
     */
    getEncounterConditionValueByName: getByName<EncounterConditionValue>;

    /**
     * Evolution chains are essentially family trees. They start with the lowest 
     * stage within a family and detail evolution conditions for each as well as 
     * Pokémon they can evolve into up through the hierarchy.
     */
    getEvolutionChainById: getById<EvolutionChain>;

    /**
     * Evolution triggers are the events and conditions that cause a Pokémon to evolve. 
     * Check out {@link https://bulbapedia.bulbagarden.net/wiki/Methods_of_evolution Bulbapedia} for greater detail.
     */
    getEvolutionTriggerByName: getByName<EvolutionTrigger>;

    /**
     * A generation is a grouping of the Pokémon games that separates them based on the Pokémon they include. 
     * In each generation, a new set of Pokémon, Moves, Abilities and Types that did not exist in the previous generation are released.
     */
    getGenerationByName: getByName<Generation>;

    /**
     * A Pokédex is a handheld electronic encyclopedia device; one which is capable of recording and 
     * retaining information of the various Pokémon in a given region with the exception of the national dex 
     * and some smaller dexes related to portions of a region. 
     * See {@link https://bulbapedia.bulbagarden.net/wiki/Pokedex Bulbapedia} for greater detail.
     */
    getPokedexByName: getByName<Pokedex>;

    /**
     * Versions of the games, e.g., Red, Blue or Yellow.
     */
    getVersionByName: getByName<Version>;

    /**
     * Version groups categorize highly similar versions of the games.
     */
    getVersionGroupByName: getByName<VersionGroup>;

    /**
     * An item is an object in the games which the player can pick up, keep in their bag, and use in some manner.
     *  They have various uses, including healing, powering up, helping catch Pokémon, or to access a new area.
     */
    getItemByName: getByName<Item>;

    /**
     * Item attributes define particular aspects of items, e.g. "usable in battle" or "consumable".
     */
    getItemAttributeByName: getByName<ItemAttribute>;

    /**
     * Item categories determine where items will be placed in the players bag.
     */
    getItemCategoryByName: getByName<ItemCategory>;

    /**
     * The various effects of the move "Fling" when used with different items.
     */
    getItemFlingEffectByName: getByName<ItemFlingEffect>;

    /**
     * Pockets within the players bag used for storing items by category.
     */
    getItemPocketByName: getByName<ItemPocket>;

    /**
     * Machines are the representation of items that teach moves to Pokémon. They vary from version to version, 
     * so it is not certain that one specific TM or HM corresponds to a single Machine.
     */
    getMachineById: getById<Machine>;

    /**
     * Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move 
     * each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, 
     * usually for the purpose of removing obstacles or exploring new areas.
     */
    getMoveByName: getByName<Move>;

    /**
     * Move Ailments are status conditions caused by moves used during battle. 
     * See {@link http://bulbapedia.bulbagarden.net/wiki/http://bulbapedia.bulbagarden.net/wiki/Status_condition Bulbapedia} for greater detail.
     */
    getMoveAilmentByName: getByName<MoveAilment>;

    /**
     * Styles of moves when used in the Battle Palace. See {@link https://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(Generation_III) Bulbapedia} for greater detail.
     */
    getMoveBattleStyleByName: getByName<MoveBattleStyle>;

    /**
     * Very general categories that loosely group move effects.
     */
    getMoveCategoryByName: getByName<MoveCategory>;

    /**
     * Damage classes moves can have, e.g. physical, special, or non-damaging.
     */
    getMoveDamageClassByName: getByName<MoveDamageClass>;

    /**
     * Methods by which Pokémon can learn moves.
     */
    getMoveLearnMethodByName: getByName<MoveLearnMethod>;

    /**
     * Targets moves can be directed at during battle. Targets can be Pokémon, environments or even other moves.
     */
    getMoveTargetByName: getByName<MoveTarget>;

    /**
     * Locations that can be visited within the games. Locations make up sizable portions of regions, like cities or routes.
     */
    getLocationByName: getByName<Location>;

    /**
     * Location areas are sections of areas, such as floors in a building or cave. Each area has its own set of possible Pokémon encounters.
     */
    getLocationAreaByName: getByName<LocationArea>;

    /**
     * Areas used for grouping Pokémon encounters in Pal Park. They're like habitats that are specific to {@link https://bulbapedia.bulbagarden.net/wiki/Pal_Park Pal Park}.
     */
    getPalParkAreaByName: getByName<PalParkArea>;

    /**
     * A region is an organized area of the Pokémon world. Most often, the main difference between regions is the species of Pokémon that can be encountered within them.
     */
    getRegionByName: getByName<Region>;

    /**
     * Abilities provide passive effects for Pokémon in battle or in the overworld. 
     * Pokémon have multiple possible abilities but can have only one ability at a time. 
     * Check out {@link https://bulbapedia.bulbagarden.net/wiki/Ability Bulbapedia} for greater detail.
     */
    getAbilityByName: getByName<Ability>;

    /**
     * Characteristics indicate which stat contains a Pokémon's highest IV. A Pokémon's Characteristic is 
     * determined by the remainder of its highest IV divided by 5 (gene_modulo). 
     * Check out {@link https://bulbapedia.bulbagarden.net/wiki/Characteristic Bulbapedia} for greater detail.
     */
    getCharacteristicById: getById<Characteristic>;

    /**
     * Egg Groups are categories which determine which Pokémon are able to interbreed. Pokémon may belong to either one or two Egg Groups. 
     * Check out {@link https://bulbapedia.bulbagarden.net/wiki/Egg_Group Bulbapedia} for greater detail.
     */
    getEggGroupByName: getByName<EggGroup>;

    /**
     * Genders were introduced in Generation II for the purposes of breeding Pokémon but can also 
     * result in visual differences or even different evolutionary lines. 
     * Check out {@link https://bulbapedia.bulbagarden.net/wiki/Gender Bulbapedia} for greater detail.
     */
    getGenderByName: getByName<Gender>;

    /**
     * Growth rates are the speed with which Pokémon gain levels through experience. 
     * Check out {@link https://bulbapedia.bulbagarden.net/wiki/Experience Bulbapedia} for greater detail.
     */
    getGrowthRateByName: getByName<GrowthRate>;

    /**
     * Natures influence how a Pokémon's stats grow. See {@link https://bulbapedia.bulbagarden.net/wiki/Nature Bulbapedia} for greater detail.
     */
    getNatureByName: getByName<Nature>;

    /**
     * Pokeathlon Stats are different attributes of a Pokémon's performance in Pokéathlons. In Pokéathlons, 
     * competitions happen on different courses; one for each of the different Pokéathlon stats. 
     * See {@link https://bulbapedia.bulbagarden.net/wiki/Pokéathlon Bulbapedia} for greater detail.
     */
    getPokeathlonStatByName: getByName<PokeathlonStat>;

    /**
     * Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught 
     * using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific 
     * species but may take on a variant which makes it differ from other Pokémon of the same species, such as base 
     * stats, available abilities and typings. 
     * See {@link https://bulbapedia.bulbagarden.net/wiki/Pokémon_(species) Bulbapedia} for greater detail.
     */
    getPokemonByName: getByName<Pokemon>;

    /**
     * Colors used for sorting Pokémon in a Pokédex. The color listed in the Pokédex is 
     * usually the color most apparent or covering each Pokémon's body. No orange category exists; 
     * Pokémon that are primarily orange are listed as red or brown.
     */
    getPokemonColorByName: getByName<PokemonColor>;

    /**
     * Some Pokémon may appear in one of multiple, visually different forms. 
     * These differences are purely cosmetic. For variations within a Pokémon species, 
     * which do differ in more than just visuals, the 'Pokémon' entity is used to represent such a variety.
     */
    getPokemonFormByName: getByName<PokemonForm>;

    /**
     * Habitats are generally different terrain Pokémon can be found in but can also be areas designated for rare or legendary Pokémon.
     */
    getPokemonHabitatByName: getByName<PokemonHabitat>;

    /**
     * Shapes used for sorting Pokémon in a Pokédex.
     */
    getPokemonShapeByName: getByName<PokemonShape>;

    /**
     * A Pokémon Species forms the basis for at least one Pokémon. Attributes of a Pokémon 
     * species are shared across all varieties of Pokémon within the species. A good example is Wormadam; 
     * Wormadam is the species which can be found in three different varieties, Wormadam-Trash, Wormadam-Sandy and Wormadam-Plant.
     */
    getPokemonSpeciesByName: getByName<PokemonSpecies>;

    /**
     * Stats determine certain aspects of battles. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles.
     */
    getStatByName: getByName<Stat>;

    /**
     * Types are properties for Pokémon and their moves. Each type has three properties: 
     * which types of Pokémon it is super effective against, which types of Pokémon it is not very effective against,
     * and which types of Pokémon it is completely ineffective against.
     */
    getTypeByName: getByName<Type>;

    /**
     * Endpoints list
     */
    getEndpointsList: () => Promise<{[k in Endpoints]: string}>;

    /**
     * Berries list
     */
    getBerriesList: getList<Berry>;

    /**
     * Berries firmness list
     */
    getBerriesFirmnessList: getList<BerryFirmness>;

    /**
     * Berries flavors list
     */
    getBerriesFlavorsList: getList<BerryFlavor>;

    /**
     * Contest types list
     */
    getContestTypesList: getList<ContestType>;

    /**
     * Contest effects list
     */
    getContestEffectsList: getList<ContestEffect>;

    /**
     * Super contest effects list
     */
    getSuperContestEffectsList: getList<SuperContextEffect>;

    /**
     * Encounter methods list
     */
    getEncounterMethodsList: getList<EncounterMethod>;

    /**
     * Encounter conditions list
     */
    getEncounterConditionsList: getList<EncounterCondition>;

    /**
     * Encounter condition values list
     */
    getEncounterConditionValuesList: getList<EncounterConditionValue>;

    /**
     * Evolution chains list
     */
    getEvolutionChainsList: getList<EvolutionChain>;

    /**
     * Evolution triggers list
     */
    getEvolutionTriggersList: getList<EvolutionTrigger>;

    /**
     * Generations list
     */
    getGenerationsList: getList<Generation>;

    /**
     * Pokedexs list
     */
    getPokedexsList: getList<Pokedex>;

    /**
     * Versions list
     */
    getVersionsList: getList<Version>;

    /**
     * Version groups liost
     */
    getVersionGroupsList: getList<VersionGroup>;

    /**
     * Items list
     */
    getItemsList: getList<Item>;

    /**
     * Item attributes list
     */
    getItemAttributesList: getList<ItemAttribute>;

    /**
     * Item categories list
     */
    getItemCategoriesList: getList<ItemCategory>;

    /**
     * Item fling effects list
     */
    getItemFlingEffectsList: getList<ItemFlingEffect>;

    /**
     * Item pockets list
     */
    getItemPocketsList: getList<ItemPocket>;

    /**
     * Machines list
     */
    getMachinesList: getList<Machine>;

    /**
     * Moves list
     */
    getMovesList: getList<Move>;

    /**
     * Move ailments list
     */
    getMoveAilmentsList: getList<MoveAilment>;

    /**
     * Move battle styles list
     */
    getMoveBattleStylesList: getList<MoveBattleStyle>;

    /**
     * Move categories list
     */
    getMoveCategoriesList: getList<MoveCategory>;

    /**
     * Move damage classes list
     */
    getMoveDamageClassesList: getList<MoveDamageClass>;

    /**
     * Move learn methods list
     */
    getMoveLearnMethodsList: getList<MoveLearnMethod>;

    /**
     * Move targets list
     */
    getMoveTargetsList: getList<MoveTarget>;

    /**
     * Locations list
     */
    getLocationsList: getList<Location>;

    /**
     * Location areas list
     */
    getLocationAreasList: getList<LocationArea>;

    /**
     * Pal park areas list
     */
    getPalParkAreasList: getList<PalParkArea>;

    /**
     * Regions list
     */
    getRegionsList: getList<Region>;

    /**
     * Abilities list
     */
    getAbilitiesList: getList<Ability>;

    /**
     * Characteristics list
     */
    getCharacteristicsList: getList<Characteristic>;

    /**
     * Egg groups list
     */
    getEggGroupsList: getList<EggGroup>;

    /**
     * Genders list
     */
    getGendersList: getList<Gender>;

    /**
     * Growth rates list
     */
    getGrowthRatesList: getList<GrowthRate>;

    /**
     * Natures list
     */
    getNaturesList: getList<Nature>;

    /**
     * Pokeathlon stats list
     */
    getPokeathlonStatsList: getList<PokeathlonStat>;

    /**
     * Pokemons list
     */
    getPokemonsList: getList<Pokemon>;

    /**
     * Pokemon colors list
     */
    getPokemonColorsList: getList<PokemonColor>;

    /**
     * Pokemon froms list
     */
    getPokemonFormsList: getList<PokemonForm>;

    /**
     * Pokemon habitats list
     */
    getPokemonHabitatsList: getList<PokemonHabitat>;

    /**
     * Pokemon shapes list
     */
    getPokemonShapesList: getList<PokemonShape>;

    /**
     * Pokemon species list
     */
    getPokemonSpeciesList: getList<PokemonSpecies>;

    /**
     * Stats list
     */
    getStatsList: getList<Stat>;

    /**
     * Types list
     */
    getTypesList: getList<Type>;

    /**
     * Languages lst
     */
    getLanguagesList: getList<Language>;
}
