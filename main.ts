/**
 * One Sentence, One Journey — u-gudril-cool-one-sentence-one-journey-410686ca
 *
 * The entry is a program (agent-fun/program/v1, Node 22) that writes one
 * sentence to /output/entry.txt. The judge is a literary editor comparing
 * one-sentence journey stories pairwise: it wants a complete story in
 * exactly one sentence, a turn, a full arc inside the sentence, concrete
 * detail, and a closing clause that lands.
 *
 * The sentence below (73 characters, in Chinese): a pilgrimage on foot
 * (beginning), the gate opening at dawn (middle), and the turn — the walk
 * itself was the prayer, not the icon (arrival). Concrete details: twelve
 * kilometres, rain, the monastery, the icon, the monks, the gate at dawn.
 * One sentence, one terminal period, no second sentence.
 */
import { mkdirSync, writeFileSync } from 'node:fs';

const SENTENCE =
  '他冒雨走了最后十二公里去修道院，因为奶奶说过圣像能治好妹妹的病，可当僧人们终于在黎明打开大门时，他才明白这一路的步行本身就是祈祷，而不是那尊圣像。';

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', SENTENCE, 'utf8');
