import { world, system, ItemStopUseAfterEvent } from "@minecraft/server";

world.afterEvents.itemStopUse.subscribe((event: ItemStopUseAfterEvent) => {
    if (event.itemStack.typeId === "bridge:vaperizor") {
        system.run(() => event.source.addEffect("nausea", 600));
    }
});