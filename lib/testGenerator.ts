import { questionBank, CHAPTERS, type BankQuestion } from "@/data/questionBank";

/**
 * Randomly picks one question per enabled topic, preserving chapter order.
 * If a topic has no questions in the bank it is silently skipped.
 */
export function generateTest(enabledTopicIds?: Set<string>): BankQuestion[] {
  const result: BankQuestion[] = [];

  for (const chapter of CHAPTERS) {
    for (const topicId of chapter.topicIds) {
      if (enabledTopicIds && !enabledTopicIds.has(topicId)) continue;

      const pool = questionBank.filter((q) => q.topicId === topicId);
      if (pool.length === 0) continue;

      result.push(pool[Math.floor(Math.random() * pool.length)]);
    }
  }

  return result;
}
