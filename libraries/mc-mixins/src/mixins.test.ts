import { ItemStack, ScoreboardObjective, Block, Player, Entity, world } from "@minecraft/server";
import { describe, it, expect } from "vitest";

// You need to import it
import "./mixins";

describe("ItemStack mixin", () => {
  const obj = new ItemStack("paper");
  it("should have startCooldown", () => {
    expect(typeof obj.startCooldown).toBe("function");
  });
  it("should have executeMolang", () => {
    expect(typeof obj.executeMolang).toBe("function");
  });
});
describe("ScoreboardObjective mixin", () => {
  const obj = world.scoreboard.addObjective("kills");
  it("should have tryGetScore", () => {
    expect(typeof obj.tryGetScore).toBe("function");
  });
});
describe("Block mixin", () => {
  const obj = world.getDimension("overworld").getBlock({ x: 0, y: 0, z: 0 });
  it("should have executeMolang", () => {
    expect(typeof (obj as any).executeMolang).toBe("function");
  });
  it("should have clearDynamicProperties", () => {
    expect(typeof (obj as any).clearDynamicProperties).toBe("function");
  });
  it("should have getDynamicProperty", () => {
    expect(typeof (obj as any).getDynamicProperty).toBe("function");
  });
  it("should have getDynamicPropertyIds", () => {
    expect(typeof (obj as any).getDynamicPropertyIds).toBe("function");
  });
  it("should have getDynamicPropertyTotalByteCount", () => {
    expect(typeof (obj as any).getDynamicPropertyTotalByteCount).toBe("function");
  });
  it("should have setDynamicProperty", () => {
    expect(typeof (obj as any).setDynamicProperty).toBe("function");
  });
  it("should have getState", () => {
    expect(typeof (obj as any).getState).toBe("function");
  });
  it("should have setState", () => {
    expect(typeof (obj as any).setState).toBe("function");
  });
  it("should have incrementState", () => {
    expect(typeof (obj as any).incrementState).toBe("function");
  });
  it("should have decrementState", () => {
    expect(typeof (obj as any).decrementState).toBe("function");
  });
});
describe("Player mixin", () => {
  const obj = world.getPlayers()[0];
  it("should have applyArmor", () => {
    expect(typeof (obj as any).applyArmor).toBe("function");
  });
});
describe("Entity mixin", () => {
  const obj = world.getEntity("0");
  it("should have executeMolang", () => {
    expect(typeof (obj as any).executeMolang).toBe("function");
  });
});
describe("String mixin", () => {
  const obj = "hello world";
  it("should have toSmartTitleCase", () => {
    expect(typeof (obj as any).toSmartTitleCase).toBe("function");
  });
  it("should have toTitleCase", () => {
    expect(typeof (obj as any).toTitleCase).toBe("function");
  });
  it("should have toCamelCase", () => {
    expect(typeof (obj as any).toCamelCase).toBe("function");
  });
  it("should have toParamCase", () => {
    expect(typeof (obj as any).toParamCase).toBe("function");
  });
  it("should have toPascalCase", () => {
    expect(typeof (obj as any).toPascalCase).toBe("function");
  });
  it("should have toSnakeCase", () => {
    expect(typeof (obj as any).toSnakeCase).toBe("function");
  });
  it("should have truncate", () => {
    expect(typeof (obj as any).truncate).toBe("function");
  });
  it("should have reverse", () => {
    expect(typeof (obj as any).reverse).toBe("function");
  });
});
