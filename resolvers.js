const ItemsAPI = require('./datasources/items');
const itemsAPI = new ItemsAPI();

const BartersAPI = require('./datasources/barters');
const bartersAPI = new BartersAPI();

const CraftsAPI = require('./datasources/crafts');
const craftsAPI = new CraftsAPI();

const QuestsAPI = require('./datasources/quests');
const questsAPI = new QuestsAPI();

const TradersAPI = require('./datasources/traders');
const tradersAPI = new TradersAPI();

const HideoutAPI = require('./datasources/hideout');
const hideoutAPI = new HideoutAPI();

const HistoricalPricesAPI = require('./datasources/historical-prices');
const historicalPricesAPI = new HistoricalPricesAPI();

const status = require('./datasources/status');

const traderResets = require('./datasources/trader-resets');

module.exports = {
    itemInit: async () => {
        return await itemsAPI.init();
    },

    item: async (args) => {
        return await itemsAPI.getItem(args.id);
    },

    itemsByType: async(args) => {
        return await itemsAPI.getItemsByType(args.type);
    },

    itemsByName: async(args) => {
        return await itemsAPI.getItemsByName(args.name);
    },

    itemsByBsgCategoryId: async(args) => {
        return await itemsAPI.getItemsByBsgCategoryId(args.bsgCategoryId);
    },

    barters: async () => {
        return await bartersAPI.getList();
    },

    crafts: async () => {
        return await craftsAPI.getList();
    },

    quests: async () => {
        return await questsAPI.getList()
    },

    traders: async (args) => {
        return await tradersApi.get(args.id);
    },

    hideoutModules: async () => {
        return await hideoutAPI.getList();
    },

    historicalItemPrices: async (args) => {
        return await historicalPricesAPI.getByItemId(args.id);
    },

    status: async () => {
        return await status();
    },

    traderResetTimes: async () => {
        return await traderResets();
    },
};
