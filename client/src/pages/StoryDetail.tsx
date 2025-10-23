import { useParams, Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';

export default function StoryDetail() {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useLanguage();

  // 故事資料（在實際應用中會從API或數據庫獲取）
  const stories = [
    {
      id: 1,
      tribe: '排灣族',
      category: t('stories.category.youth'),
      title: language === 'zh' ? '從台北回到霧台:青年的小米復育之路' : 'From Taipei to Wutai: A Youth\'s Journey in Millet Revival',
      excerpt: language === 'zh' ? '離開都市的工程師工作,回到部落跟著vuvu(祖父母)學習傳統農耕,用科技記錄20種小米品種的生長數據,建立部落的種子銀行...' : 'Leaving an engineering job in the city, returning to the tribe to learn traditional farming from vuvu (grandparents), using technology to record growth data of 20 millet varieties, establishing the tribe\'s seed bank...',
      content: language === 'zh' ? 
        `從台北的高樓大廈回到霧台部落的山林間，阿布思的人生轉了個大彎。作為一名軟體工程師，他原本有著穩定的都市生活，但內心深處對部落文化的渴望，最終讓他做出了回鄉的決定。

「每次回部落看到vuvu（祖父母）時，總覺得有些東西正在慢慢消失，」阿布思回憶道。「那些關於小米的知識、種植的技巧，還有與土地共生的智慧，如果我們這一代不學起來，可能就永遠失傳了。」

小米對排灣族來說不只是糧食，更是文化的核心。每個品種都有自己的名字、故事和用途。阿布思跟著部落長者學習，發現部落原本種植超過20種不同的小米品種，但現在大多數都已經消失。

「我用我的專業背景，開始記錄每個品種的生長數據、適應環境和特性，」他說。「我們建立了一個數位化的種子銀行，不僅保存種子，也記錄相關的文化知識和種植技術。」

這個計畫不僅復育了珍貴的小米品種，也吸引了更多年輕人回到部落。阿布思證明了，傳統文化與現代科技並不衝突，反而可以相輔相成，為部落的永續發展開創新的可能性。` :
        `From the skyscrapers of Taipei to the mountains of Wutai tribe, Abus's life took a major turn. As a software engineer, he had a stable urban life, but the deep longing for tribal culture in his heart eventually led him to decide to return home.

"Every time I returned to the tribe to see vuvu (grandparents), I always felt that something was slowly disappearing," Abus recalled. "That knowledge about millet, planting techniques, and the wisdom of coexisting with the land - if our generation doesn't learn it, it might be lost forever."

For the Paiwan people, millet is not just food, but the core of culture. Each variety has its own name, story, and purpose. Learning from tribal elders, Abus discovered that the tribe originally cultivated over 20 different millet varieties, but most have now disappeared.

"I used my professional background to start recording the growth data, adaptive environments, and characteristics of each variety," he said. "We established a digital seed bank that not only preserves seeds but also records related cultural knowledge and planting techniques."

This project not only revived precious millet varieties but also attracted more young people back to the tribe. Abus proved that traditional culture and modern technology are not in conflict - instead, they can complement each other, creating new possibilities for the tribe's sustainable development.`,
      author: '阿布思',
      readTime: `8 ${t('stories.readtime')}`,
      date: '2024-09',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop',
      tags: language === 'zh' ? ['小米復育', '青年返鄉', '傳統知識'] : ['Millet Revival', 'Youth Return', 'Traditional Knowledge'],
    },
    {
      id: 2,
      tribe: '泰雅族',
      category: t('stories.category.agriculture'),
      title: language === 'zh' ? '長者智慧的有機實踐：石磊部落的農業創新' : 'Elder Wisdom in Organic Practice: Agricultural Innovation in Shilei Community',
      excerpt: language === 'zh' ? '在泰雅族石磊部落，長者們將傳統生態知識巧妙融入現代有機農業。運用森林中的黃柏、竹筍、梅子等在地資源，開創出獨特的天然肥料與病蟲害防治方法，證明了原住民智慧在永續農業中的無限可能...' : 'In the Tayal Shilei community, elders skillfully integrate traditional ecological knowledge into modern organic farming. Using local forest resources like huang bai, bamboo shoots, and plums, they\'ve created unique natural fertilizers and pest control methods, proving the infinite potential of indigenous wisdom in sustainable agriculture...',
      content: language === 'zh' ?
        `在泰雅族石磊部落的山坡上，一場農業革命正在悄然進行。這裡的長者們將祖先傳承的生態智慧，巧妙地融入到現代有機農業中，創造出令人驚艷的成果。

部落長者分享：「我們的祖先早就知道如何與森林共生，每一種植物都有它的用途。」在他們的指導下，部落開始運用森林中的黃柏作為天然的土壤改良劑，不僅能夠調節土壤酸鹼值，還具有防腐和驅蟲的效果。

「竹筍不只可以食用，發酵後的竹筍液是很好的有機肥料，」一位農業合作社的成員解釋道。「我們還發現梅子和肉桂的萃取物對防治病蟲害特別有效，而且完全不會傷害土壤生態。」

這種創新的農法不僅提高了作物產量，更重要的是保持了土壤的健康和生物多樣性。部落的有機蔬菜現在供應到都市的有機商店，為部落帶來穩定的收入。

最令人感動的是，這些傳統知識的傳承。年輕一代在學習現代農業技術的同時，也重新認識了祖先的智慧。石磊部落證明了，傳統與創新並不衝突，反而能夠創造出更永續、更有價值的農業模式。

這個故事告訴我們，原住民的傳統生態知識不是過時的產物，而是面對現代環境挑戰的寶貴資源。在追求永續發展的今天，我們更應該珍視並學習這些與自然和諧共處的智慧。` :
        `On the slopes of the Tayal Shilei community, an agricultural revolution is quietly taking place. Here, elders skillfully integrate ancestral ecological wisdom into modern organic farming, creating amazing results.

A tribal elder shared: "Our ancestors knew how to coexist with the forest long ago. Every plant has its purpose." Under their guidance, the tribe began using huang bai from the forest as a natural soil conditioner, which not only regulates soil pH but also has antiseptic and insect-repelling effects.

"Bamboo shoots are not just for eating. Fermented bamboo shoot liquid makes excellent organic fertilizer," explained a member of the agricultural cooperative. "We also discovered that extracts from plums and cinnamon are particularly effective for pest control, and they don't harm the soil ecosystem at all."

This innovative farming method not only increased crop yields but, more importantly, maintained soil health and biodiversity. The tribe's organic vegetables now supply urban organic stores, bringing stable income to the community.

Most touching is the transmission of this traditional knowledge. While learning modern agricultural techniques, the younger generation is rediscovering ancestral wisdom. Shilei community proves that tradition and innovation don't conflict - instead, they can create more sustainable and valuable agricultural models.

This story tells us that indigenous traditional ecological knowledge is not an outdated product, but a valuable resource for facing modern environmental challenges. In today's pursuit of sustainable development, we should treasure and learn from this wisdom of harmonious coexistence with nature.`,
      author: '石磊部落農業合作社',
      readTime: `11 ${t('stories.readtime')}`,
      date: '2024-10',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop',
      tags: language === 'zh' ? ['長者智慧', '有機農業', '傳統生態知識'] : ['Elder Wisdom', 'Organic Agriculture', 'Traditional Ecological Knowledge'],
    },
    {
      id: 3,
      tribe: '泰雅族',
      category: t('stories.category.culture'),
      title: language === 'zh' ? '織布機上的文化記憶:重建泰雅織布技藝' : 'Cultural Memory on the Loom: Reviving Tayal Weaving Arts',
      excerpt: language === 'zh' ? '三代織女的傳承故事,從幾乎失傳到成立織布工坊,不僅保存了傳統圖騰,更創造了部落婦女的經濟來源,讓年輕人看見文化的價值...' : 'Three generations of weavers\' heritage story, from near extinction to establishing weaving workshops, not only preserving traditional totems but also creating economic opportunities for tribal women, showing young people the value of culture...',
      content: language === 'zh' ?
        `在尤瑪·達陸的手中，每一根線都承載著泰雅族的文化記憶。作為泰雅族織布工藝的重要傳承者，她見證了這項傳統技藝從幾乎失傳到重新興盛的完整歷程。

「我的母親是最後一代會織布的婦女，」尤瑪回憶道。「當時年輕人都到都市工作，沒有人想學這些『老古董』。我看著那些美麗的圖騰漸漸從部落消失，心裡很不安。」

泰雅族的織布不只是手工藝，更是一部活的歷史書。每個圖騰都有其特定的意義和故事：紅色代表英勇，白色象徵純潔，而複雜的幾何圖案則記錄著族群的遷徙路線和重要事件。

決定重拾織布機的那一刻，尤瑪面臨的挑戰比想像中更大。「很多技法已經失傳，我只能從僅存的老織品中研究，一點一點地重新學習。」她花了十年時間，才完全掌握了祖先的織布技藝。

2010年，尤瑪成立了織布工坊，開始系統性地教授年輕族人織布技術。工坊不僅復育了瀕臨失傳的傳統圖騰，更將現代設計元素融入其中，創造出既傳統又時尚的織品。

「現在部落裡有超過30位婦女參與織布工作，」尤瑪自豪地說。「她們不僅重新連結了自己的文化根源，也有了穩定的經濟收入。更重要的是，年輕人開始認識到文化的價值。」

這些織品現在不僅在台灣各地的文創市集中受到歡迎，更遠銷到日本和歐洲。每一件織品都標註著織女的名字和圖騰的故事，讓購買者了解背後的文化意涵。

尤瑪的故事證明，傳統文化的保存並不意味著墨守成規。透過創新和適應，古老的技藝可以在現代社會中找到新的生命力，成為族群文化傳承和經濟發展的重要力量。` :
        `In Yuma Talu's hands, every thread carries the cultural memory of the Tayal people. As an important inheritor of Tayal weaving crafts, she witnessed the complete journey of this traditional skill from near extinction to revival.

"My mother was among the last generation of women who could weave," Yuma recalled. "At that time, young people all went to work in cities, and no one wanted to learn these 'old things.' I watched those beautiful totems gradually disappear from the tribe, and felt very uneasy."

Tayal weaving is not just handicraft, but a living history book. Each totem has its specific meaning and story: red represents bravery, white symbolizes purity, and complex geometric patterns record the migration routes and important events of the ethnic group.

The moment she decided to pick up the loom again, Yuma faced challenges greater than imagined. "Many techniques were already lost. I could only study from the few remaining old weavings, learning bit by bit." It took her ten years to fully master her ancestors' weaving skills.

In 2010, Yuma established a weaving workshop and began systematically teaching young tribal members weaving techniques. The workshop not only revived traditional totems on the verge of extinction but also integrated modern design elements, creating textiles that are both traditional and fashionable.

"Now there are over 30 women in the tribe participating in weaving work," Yuma said proudly. "They have not only reconnected with their cultural roots but also gained stable economic income. More importantly, young people are beginning to recognize the value of culture."

These textiles are now popular not only in cultural and creative markets throughout Taiwan but are also exported to Japan and Europe. Each textile is labeled with the weaver's name and the totem's story, allowing buyers to understand the cultural significance behind it.

Yuma's story proves that preserving traditional culture doesn't mean being rigid. Through innovation and adaptation, ancient crafts can find new vitality in modern society, becoming an important force for ethnic cultural heritage and economic development.`,
      author: '尤瑪·達陸',
      readTime: `10 ${t('stories.readtime')}`,
      date: '2024-08',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      tags: language === 'zh' ? ['織布工藝', '女性力量', '文化傳承'] : ['Weaving Craft', 'Women Power', 'Cultural Heritage'],
    },
    {
      id: 4,
      tribe: '阿美族',
      category: t('stories.category.agriculture'),
      title: language === 'zh' ? '海稻米的重生:港口部落的農業奇蹟' : 'Revival of Sea Rice: Agricultural Miracle of Gangkou Tribe',
      excerpt: language === 'zh' ? '失傳百年的海稻米品種,在部落耆老的記憶中被找回。利用海水灌溉的獨特農法,不僅復育了珍貴品種,更創造了永續農業的新模式...' : 'The sea rice variety lost for a century was rediscovered in tribal elders\' memories. Using unique farming methods with seawater irrigation, not only reviving precious varieties but creating new models of sustainable agriculture...',
      content: language === 'zh' ?
        `在台東縣成功鎮的港口部落，一個被遺忘了百年的農業奇蹟正在重新發生。舒米·如妮和她的團隊成功復育了阿美族的傳統海稻米，這個被海水滋養的稻米品種，承載著祖先與海洋共生的古老智慧。

「阿美族自古就是海洋民族，我們的祖先發現，在海邊的水田裡，稻米可以用海水灌溉，」舒米解釋道。「這種海稻米不僅適應鹽分環境，產量還比一般稻米更高，營養價值也更豐富。」

海稻米的消失始於日治時期。殖民政府推廣蓬萊米等高產品種，加上現代化農業的衝擊，海稻米逐漸被遺忘。直到2009年，舒米在部落耆老口中聽到了這個故事，決定開始尋找這個失落的寶藏。

復育過程充滿挑戰。「我們找遍了各地的種子銀行，甚至到日本去尋找可能保存的種子，」舒米回憶。「最後在一位90歲長者家中的米甕裡，找到了幾顆珍貴的種子。」

從這幾顆種子開始，舒米和團隊花了十年時間，逐步擴大種植面積。他們不僅復育了海稻米，更重新學習了祖先的種植技術：利用潮汐的自然節奏灌溉，與海洋生態和諧共存。

「海稻米的種植過程就像是一門生態學，」舒米說。「我們必須了解潮汐、觀察海鳥、感受風向，這些都是判斷種植時機的重要指標。」

如今，港口部落的海稻米已經成為台灣農業的新亮點。這種稻米不僅有獨特的海洋風味，更重要的是它代表的永續農業理念：與自然和諧共處，而非征服自然。

海稻米的成功復育，也帶動了部落的文化復振。年輕人開始回到部落學習傳統農法，海稻米的故事被寫入教科書，成為環境教育的重要教材。

舒米的故事告訴我們，傳統農業知識中蘊含著面對氣候變遷的解決方案。在海平面上升、土壤鹽化日益嚴重的今天，海稻米的復育不只是文化保存，更是對未來農業發展的重要啟示。` :
        `In the Gangkou tribe of Chenggong Township, Taitung County, an agricultural miracle forgotten for a century is happening again. Sumi Runi and her team successfully revived the traditional sea rice of the Amis people, a rice variety nourished by seawater that carries the ancient wisdom of ancestors coexisting with the ocean.

"The Amis have been an oceanic people since ancient times. Our ancestors discovered that in coastal paddy fields, rice could be irrigated with seawater," Sumi explained. "This sea rice not only adapts to saline environments but also yields more than regular rice and has higher nutritional value."

The disappearance of sea rice began during the Japanese colonial period. The colonial government promoted high-yield varieties like Penglai rice, and with the impact of modern agriculture, sea rice was gradually forgotten. It wasn't until 2009 that Sumi heard this story from tribal elders and decided to search for this lost treasure.

The revival process was full of challenges. "We searched seed banks everywhere, even went to Japan to look for possibly preserved seeds," Sumi recalled. "Finally, we found a few precious seeds in a rice jar in a 90-year-old elder's home."

Starting from these few seeds, Sumi and her team spent ten years gradually expanding the planting area. They not only revived sea rice but also relearned ancestral planting techniques: using the natural rhythm of tides for irrigation, coexisting harmoniously with marine ecosystems.

"The cultivation process of sea rice is like ecology," Sumi said. "We must understand tides, observe seabirds, and feel wind directions - these are all important indicators for judging planting timing."

Today, Gangkou tribe's sea rice has become a new highlight of Taiwanese agriculture. This rice not only has a unique oceanic flavor but, more importantly, represents the concept of sustainable agriculture: harmonious coexistence with nature, rather than conquering it.

The successful revival of sea rice has also driven cultural revival in the tribe. Young people are returning to the tribe to learn traditional farming methods, and the story of sea rice has been written into textbooks, becoming important material for environmental education.

Sumi's story tells us that traditional agricultural knowledge contains solutions for facing climate change. In today's world of rising sea levels and increasing soil salinization, the revival of sea rice is not just cultural preservation but an important inspiration for future agricultural development.`,
      author: '舒米·如妮',
      readTime: `12 ${t('stories.readtime')}`,
      date: '2024-07',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop',
      tags: language === 'zh' ? ['海稻米', '原生種', '永續農業'] : ['Sea Rice', 'Native Species', 'Sustainable Agriculture'],
    },
    {
      id: 5,
      tribe: '達悟族',
      category: t('stories.category.ecology'),
      title: language === 'zh' ? '飛魚季的永續智慧:蘭嶼的海洋守護' : 'Sustainable Wisdom of Flying Fish Season: Ocean Conservation in Lanyu',
      excerpt: language === 'zh' ? '數千年來,達悟族嚴格遵守飛魚季的傳統規範,只在特定時間捕撈特定魚種。這套完整的海洋資源管理系統,是現代永續漁業的最佳範例...' : 'For thousands of years, the Tao people have strictly followed traditional flying fish season regulations, fishing specific species only at specific times. This complete marine resource management system is the best example of modern sustainable fisheries...',
      content: language === 'zh' ?
        `在蘭嶼的藍色海洋中，達悟族人世代傳承著一套精密的海洋資源管理系統。希婻·瑪飛洑作為部落的漁業文化傳承者，深知這套古老智慧在現代海洋保育中的重要價值。

「飛魚季不只是捕魚的時間，它是我們與海洋對話的方式，」希婻解釋道。「從每年2月到6月，我們遵循祖先的規範，只在特定時間捕撈特定魚種，其他時間讓海洋休息。」

達悟族的漁業規範極為細緻。不同的月份有不同的捕撈對象：2-3月主要捕捉小型飛魚，4-5月捕捉大型飛魚，6月之後則進入禁捕期。每種漁法都有嚴格的規定，從船隻的大小到網具的使用，都必須符合傳統規範。

「我們的祖先早就知道，海洋資源是有限的，」希婻說。「如果過度捕撈，不僅會影響魚群繁殖，也會破壞整個海洋生態系統。所以我們設定了禁捕期，讓魚類有足夠的時間繁衍後代。」

這套傳統管理系統的科學性，在現代海洋學研究中得到了證實。飛魚的洄游模式、繁殖週期，以及與其他海洋生物的關係，都與達悟族的傳統知識高度吻合。

然而，現代化的衝擊也為這套傳統系統帶來挑戰。「年輕人到台灣本島工作，不了解這些規範的意義。外來的漁船也不遵守我們的規則，」希婻憂心地說。

為了保護這套寶貴的海洋知識，希婻開始與海洋科學家合作，將傳統規範與現代科學結合。他們建立了海洋資源監測系統，記錄魚群數量變化，驗證傳統管理方法的有效性。

「我們發現，遵循傳統規範的海域，魚群數量明顯比其他地方穩定，」希婻自豪地說。「這證明了我們祖先的智慧是正確的。」

現在，達悟族的飛魚季管理模式已經成為國際海洋保育的重要參考。聯合國教科文組織將其列為人類非物質文化遺產，希望能推廣到其他地區。

希婻的努力不僅保護了海洋資源，也讓年輕一代重新認識了自己文化的價值。「海洋是我們的冰箱，」他常對年輕人說，「但我們必須知道什麼時候該打開，什麼時候該關上。」` :
        `In the blue ocean of Lanyu, the Tao people have passed down a sophisticated marine resource management system through generations. Sipen Maviwo, as a tribal fishing culture inheritor, deeply understands the important value of this ancient wisdom in modern ocean conservation.

"Flying fish season is not just time for fishing; it's our way of dialoguing with the ocean," Sipen explained. "From February to June each year, we follow ancestral regulations, fishing specific species only at specific times, letting the ocean rest at other times."

The Tao fishing regulations are extremely detailed. Different months have different fishing targets: February-March mainly catch small flying fish, April-May catch large flying fish, and after June enters the fishing ban period. Each fishing method has strict regulations, from boat size to net use, all must comply with traditional norms.

"Our ancestors knew long ago that marine resources are limited," Sipen said. "If we overfish, it will not only affect fish reproduction but also destroy the entire marine ecosystem. So we set fishing ban periods to give fish enough time to reproduce."

The scientific nature of this traditional management system has been confirmed in modern oceanographic research. Flying fish migration patterns, breeding cycles, and relationships with other marine life all highly match Tao traditional knowledge.

However, modernization impacts have also brought challenges to this traditional system. "Young people work in mainland Taiwan and don't understand the meaning of these regulations. Outside fishing boats also don't follow our rules," Sipen worried.

To protect this valuable marine knowledge, Sipen began collaborating with marine scientists, combining traditional regulations with modern science. They established marine resource monitoring systems, recording changes in fish populations to verify the effectiveness of traditional management methods.

"We found that sea areas following traditional regulations have significantly more stable fish populations than other places," Sipen said proudly. "This proves our ancestors' wisdom was correct."

Now, the Tao flying fish season management model has become an important reference for international ocean conservation. UNESCO listed it as Intangible Cultural Heritage of Humanity, hoping to promote it to other regions.

Sipen's efforts not only protect marine resources but also help the younger generation rediscover the value of their culture. "The ocean is our refrigerator," he often tells young people, "but we must know when to open it and when to close it."`,
      author: '希婻·瑪飛洑',
      readTime: `9 ${t('stories.readtime')}`,
      date: '2024-06',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      tags: language === 'zh' ? ['飛魚文化', '海洋保育', '傳統規範'] : ['Flying Fish Culture', 'Ocean Conservation', 'Traditional Regulations'],
    },
    {
      id: 6,
      tribe: '布農族',
      category: t('stories.category.craft'),
      title: language === 'zh' ? '皮革工藝的新生命:傳統狩獵文化的當代轉化' : 'New Life for Leather Crafts: Contemporary Transformation of Traditional Hunting Culture',
      excerpt: language === 'zh' ? '將傳統狩獵文化中的皮革處理技術,結合現代設計美學,創造出獨特的原住民品牌。每件作品都承載著部落的故事與文化意涵...' : 'Combining leather processing techniques from traditional hunting culture with modern design aesthetics, creating unique indigenous brands. Each piece carries tribal stories and cultural meanings...',
      content: language === 'zh' ?
        `在布農族的傳統文化中，狩獵不僅是獲取食物的方式，更是一套完整的生活哲學。馬彼得從小在部落長大，深知祖先對動物皮革的精湛處理技術，如今他將這些古老智慧轉化為現代的工藝創作。

「布農族的狩獵文化教導我們要尊重每一個生命，」馬彼得說。「當我們取得動物的生命時，就有責任充分利用它的每一部分，包括皮革。」

傳統的布農族皮革處理技術極為環保和精緻。他們使用山林中的天然材料進行鞣製：橡樹皮提供單寧酸，特定的草本植物提供防腐功能，而煙燻則賦予皮革獨特的香味和防蟲效果。

「這些技術都是祖先在長期生活中累積的智慧，」馬彼得解釋。「不使用任何化學藥劑，卻能讓皮革保持柔軟耐用數十年。」

從都市回到部落後，馬彼得開始思考如何將這些傳統技術與現代設計結合。他創立了自己的皮革工作坊，專門製作融合傳統工藝與現代美學的皮革產品。

每件作品都有其獨特的故事。錢包上的圖案取自布農族的傳統紋飾，代表著山林的智慧；背包的結構設計靈感來自傳統的背簍，兼具美觀與實用性；而手環上的編織技法，則是從祖母那裡學來的古老手藝。

「我希望每個使用我們產品的人，都能感受到布農族文化的溫度，」馬彼得說。「這不只是一件商品，而是一個故事的載體。」

工作坊的成功也為部落帶來了新的就業機會。現在有八位族人參與皮革工藝的製作，其中包括幾位年輕的返鄉青年。他們在學習傳統技術的同時，也為古老的工藝注入了新的創意。

「文化不是博物館裡的展品，」馬彼得強調。「它必須在日常生活中被使用、被傳承，才能真正保持活力。」

這些皮革製品現在不僅在台灣受到歡迎，也出口到日本和歐洲。每件產品都附有製作者的簽名和文化故事的小冊子，讓購買者了解背後的文化價值。

馬彼得的故事展示了傳統工藝在現代社會中的無限可能。透過創新和適應，古老的技術可以找到新的生命力，既保存了文化傳統，也創造了經濟價值，為部落的永續發展開闢了新的道路。` :
        `In Bunun traditional culture, hunting is not just a way to obtain food but a complete life philosophy. Ma Peter grew up in the tribe and deeply understands his ancestors' exquisite leather processing techniques. Now he transforms this ancient wisdom into modern craft creation.

"Bunun hunting culture teaches us to respect every life," Ma Peter said. "When we take an animal's life, we have the responsibility to fully utilize every part of it, including the leather."

Traditional Bunun leather processing techniques are extremely environmentally friendly and sophisticated. They use natural materials from the mountains for tanning: oak bark provides tannins, specific herbs provide preservation functions, and smoking gives leather unique fragrance and insect-repelling effects.

"These techniques are wisdom accumulated by ancestors through long-term living," Ma Peter explained. "Without using any chemicals, they could keep leather soft and durable for decades."

After returning from the city to the tribe, Ma Peter began thinking about how to combine these traditional techniques with modern design. He established his own leather workshop, specializing in leather products that blend traditional crafts with modern aesthetics.

Each piece has its unique story. Patterns on wallets are taken from Bunun traditional motifs, representing mountain forest wisdom; backpack structural design is inspired by traditional carrying baskets, combining beauty with practicality; and weaving techniques on bracelets are ancient crafts learned from grandmother.

"I hope everyone who uses our products can feel the warmth of Bunun culture," Ma Peter said. "This is not just a commodity but a carrier of stories."

The workshop's success has also brought new employment opportunities to the tribe. Now eight tribal members participate in leather craft production, including several young people who returned home. While learning traditional techniques, they also inject new creativity into ancient crafts.

"Culture is not an exhibit in a museum," Ma Peter emphasized. "It must be used and passed down in daily life to truly maintain vitality."

These leather products are now popular not only in Taiwan but also exported to Japan and Europe. Each product comes with the maker's signature and a booklet of cultural stories, allowing buyers to understand the cultural value behind it.

Ma Peter's story demonstrates the infinite possibilities of traditional crafts in modern society. Through innovation and adaptation, ancient techniques can find new vitality, preserving cultural traditions while creating economic value, opening new paths for the tribe's sustainable development.`,
      author: '馬彼得',
      readTime: `7 ${t('stories.readtime')}`,
      date: '2024-05',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop',
      tags: language === 'zh' ? ['皮革工藝', '文化創新', '品牌設計'] : ['Leather Craft', 'Cultural Innovation', 'Brand Design'],
    },
    {
      id: 7,
      tribe: '鄒族',
      category: t('stories.category.community'),
      title: language === 'zh' ? '部落共同廚房:凝聚社區的飲食文化' : 'Tribal Community Kitchen: Food Culture that Unites the Community',
      excerpt: language === 'zh' ? '透過共同廚房的建立,不僅保存了傳統料理方法,更成為部落長者與青年交流的場域,重建了現代社會逐漸流失的社區連結...' : 'Through establishing a community kitchen, not only preserving traditional cooking methods but also becoming a space for exchange between tribal elders and youth, rebuilding community connections gradually lost in modern society...',
      content: language === 'zh' ?
        `在阿里山腳下的鄒族部落裡，一個看似簡單的共同廚房，正在重新編織著社區的情感紐帶。汪啟聖作為這個計畫的發起人，見證了飲食文化如何成為部落復振的重要力量。

「現代社會讓我們的家庭變得孤立，」汪啟聖觀察道。「年輕人忙於工作，長者獨自在家，傳統的飲食文化正在慢慢消失。我們需要一個空間，讓世代之間重新連結。」

鄒族的傳統飲食文化豐富多元，從山豬肉的處理方式到野菜的採集料理，每道菜都蘊含著與山林共生的智慧。但隨著生活方式的改變，這些知識面臨失傳的危機。

共同廚房的概念很簡單：每週三天，部落成員聚在一起準備和享用傳統料理。長者負責傳授料理技巧和文化知識，年輕人則協助採買和烹飪，形成了世代共學的美好場景。

「第一次煮masa masa（鄒族傳統小米粥）時，我連小米的處理方式都不知道，」一位返鄉青年分享道。「是vuvu（祖母）耐心地教我，從清洗到熬煮，每個步驟都有其道理。」

共同廚房不僅傳承了料理技術，更重要的是重建了社區的社交網絡。用餐時間成為了故事分享的時刻，長者講述部落的歷史，年輕人分享外面世界的見聞，形成了珍貴的文化對話。

「食物是最好的媒介，」汪啟聖說。「當我們一起準備料理、一起用餐時，自然就會聊起家常，分享彼此的生活。這種連結是其他活動很難取代的。」

計畫實施三年來，效果超乎預期。不僅部落內的世代隔閡縮小了，也吸引了許多外地人前來體驗鄒族的飲食文化。這些「食客」不僅帶來了經濟收入，也成為了文化交流的橋樑。

共同廚房還發展出了「食材地圖」計畫，記錄部落周圍的野菜分布和採集季節。這不僅保存了傳統的生態知識，也為食農教育提供了寶貴的資源。

「我們發現，當年輕人了解了食材的來源和處理方式後，他們對土地的感情也更深了，」汪啟聖觀察道。「這種連結是文化傳承的基礎。」

現在，其他部落也開始學習這個模式，建立自己的共同廚房。汪啟聖樂於分享經驗，因為他相信，透過飲食文化的復振，可以重建原住民社區的凝聚力和文化自信。

這個簡單的廚房空間，證明了文化保存不需要複雜的技術或大筆資金，只需要社區成員的參與和對文化的熱愛。在共享的美食中，傳統與現代找到了和諧的平衡點。` :
        `At the foot of Alishan in a Tsou tribe, a seemingly simple community kitchen is reweaving the emotional bonds of the community. Wang Qi-sheng, as the initiator of this project, witnessed how food culture becomes an important force for tribal revival.

"Modern society has made our families isolated," Wang observed. "Young people are busy with work, elders are alone at home, and traditional food culture is slowly disappearing. We need a space to reconnect generations."

Tsou traditional food culture is rich and diverse, from wild boar processing methods to wild vegetable collection and cooking. Each dish contains wisdom of coexisting with mountain forests. But with changing lifestyles, this knowledge faces the crisis of being lost.

The community kitchen concept is simple: three days a week, tribal members gather to prepare and enjoy traditional cuisine. Elders are responsible for teaching cooking skills and cultural knowledge, while young people assist with shopping and cooking, forming a beautiful scene of intergenerational learning.

"The first time I cooked masa masa (traditional Tsou millet porridge), I didn't even know how to process millet," a returning youth shared. "It was vuvu (grandmother) who patiently taught me, from washing to boiling, every step has its reason."

The community kitchen not only passes down cooking techniques but, more importantly, rebuilds the community's social network. Meal times become moments for story sharing, with elders telling tribal history and young people sharing experiences from the outside world, forming precious cultural dialogue.

"Food is the best medium," Wang said. "When we prepare meals and eat together, we naturally chat about daily life and share each other's experiences. This connection is hard to replace with other activities."

After three years of implementation, the effects exceeded expectations. Not only did the generational gap within the tribe narrow, but it also attracted many outsiders to experience Tsou food culture. These "diners" not only brought economic income but also became bridges for cultural exchange.

The community kitchen also developed a "food map" project, recording the distribution of wild vegetables around the tribe and their harvesting seasons. This not only preserves traditional ecological knowledge but also provides valuable resources for food and farming education.

"We found that when young people understand the source and processing methods of ingredients, their feelings for the land deepen," Wang observed. "This connection is the foundation of cultural transmission."

Now, other tribes are also learning from this model, establishing their own community kitchens. Wang is happy to share experiences because he believes that through the revival of food culture, the cohesion and cultural confidence of indigenous communities can be rebuilt.

This simple kitchen space proves that cultural preservation doesn't need complex technology or large funds, just community participation and love for culture. In shared delicious food, tradition and modernity find a harmonious balance.`,
      author: '汪啟聖',
      readTime: `6 ${t('stories.readtime')}`,
      date: '2024-04',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      tags: language === 'zh' ? ['飲食文化', '社區營造', '世代交流'] : ['Food Culture', 'Community Building', 'Intergenerational Exchange'],
    },
  ];

  const story = stories.find(s => s.id === parseInt(id || ''));

  if (!story) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">故事不存在</h1>
            <p className="text-muted-foreground mb-8">您要找的故事可能已被移除或不存在。</p>
            <Button asChild>
              <Link href="/stories">回到故事列表</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Image */}
      <section className="relative h-80 md:h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${story.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8">
          <div className="container">
            <div className="flex gap-3 mb-4">
              <Badge className="bg-primary text-primary-foreground">
                {story.tribe}
              </Badge>
              <Badge variant="secondary">
                {story.category}
              </Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {story.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <article className="container py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button variant="ghost" className="mb-8 gap-2" asChild>
            <Link href="/stories">
              <ArrowLeft className="h-4 w-4" />
              {language === 'zh' ? '回到故事列表' : 'Back to Stories'}
            </Link>
          </Button>

          {/* Meta Info */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {story.author}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {story.readTime}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {story.date}
            </div>
          </div>

          {/* Story Content */}
          <div className="prose prose-lg max-w-none mb-8">
            {story.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {story.tags.map((tag, index) => (
              <Badge key={index} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Related Stories CTA */}
          <Card className="bg-muted/50">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold mb-4">
                {language === 'zh' ? '探索更多故事' : 'Explore More Stories'}
              </h3>
              <p className="text-muted-foreground mb-6">
                {language === 'zh' 
                  ? '發現更多關於原住民族文化保存與永續發展的精彩故事'
                  : 'Discover more inspiring stories about indigenous cultural preservation and sustainable development'
                }
              </p>
              <Button asChild>
                <Link href="/stories">
                  {language === 'zh' ? '瀏覽所有故事' : 'Browse All Stories'}
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </article>

      <Footer />
    </div>
  );
}