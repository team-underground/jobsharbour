<template>
	<layout>
		<div class="py-16">
			<div class="mb-8 text-center">
				<heading size="display">Frequently Asked Questions</heading>
			</div>
			<div class="max-w-4xl mx-auto">
				<card>
					<tabs>
						<tab name="About Jobs Harbour" :selected="true">
							<accordion>
								<div slot="title" class="text-lg text-gray-800 font-medium">Why jobs harbour?</div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore neque, dolore omnis deleniti, illo dolores unde veniam, in voluptate quasi consequuntur libero sint. Accusantium obcaecati dignissimos velit aliquam consectetur veniam consequuntur unde numquam ipsum eius? Autem cumque nesciunt, ratione vitae consectetur laborum porro nihil dolor magnam a, placeat hic illo?
							</accordion>
							<accordion>
								<div slot="title" class="text-lg text-gray-800 font-medium">Who we are?</div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore neque, dolore omnis deleniti, illo dolores unde veniam, in voluptate quasi consequuntur libero sint. Accusantium obcaecati dignissimos velit aliquam consectetur veniam consequuntur unde numquam ipsum eius? Autem cumque nesciunt, ratione vitae consectetur laborum porro nihil dolor magnam a, placeat hic illo?
							</accordion>
							<accordion>
								<div
									slot="title"
									class="text-lg text-gray-800 font-medium"
								>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore itaque aperiam quis. Obcaecati in quas deserunt doloremque est.</div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore neque, dolore omnis deleniti, illo dolores unde veniam, in voluptate quasi consequuntur libero sint. Accusantium obcaecati dignissimos velit aliquam consectetur veniam consequuntur unde numquam ipsum eius? Autem cumque nesciunt, ratione vitae consectetur laborum porro nihil dolor magnam a, placeat hic illo?
							</accordion>
							<accordion>
								<div
									slot="title"
									class="text-lg text-gray-800 font-medium"
								>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, mollitia?</div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore neque, dolore omnis deleniti, illo dolores unde veniam, in voluptate quasi consequuntur libero sint. Accusantium obcaecati dignissimos velit aliquam consectetur veniam consequuntur unde numquam ipsum eius? Autem cumque nesciunt, ratione vitae consectetur laborum porro nihil dolor magnam a, placeat hic illo?
							</accordion>
							<accordion>
								<div
									slot="title"
									class="text-lg text-gray-800 font-medium"
								>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae obcaecati dolore odio est. Laudantium impedit facilis, reprehenderit totam quis rerum. Ipsam earum impedit inventore!</div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore neque, dolore omnis deleniti, illo dolores unde veniam, in voluptate quasi consequuntur libero sint. Accusantium obcaecati dignissimos velit aliquam consectetur veniam consequuntur unde numquam ipsum eius? Autem cumque nesciunt, ratione vitae consectetur laborum porro nihil dolor magnam a, placeat hic illo?
							</accordion>
							<accordion>
								<div
									slot="title"
									class="text-lg text-gray-800 font-medium"
								>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet delectus ipsam?</div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore neque, dolore omnis deleniti, illo dolores unde veniam, in voluptate quasi consequuntur libero sint. Accusantium obcaecati dignissimos velit aliquam consectetur veniam consequuntur unde numquam ipsum eius? Autem cumque nesciunt, ratione vitae consectetur laborum porro nihil dolor magnam a, placeat hic illo?
							</accordion>
						</tab>
						<tab name="About Job Seeker">
							<accordion>
								<div slot="title" class="text-lg text-gray-800 font-medium">How to apply?</div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore neque, dolore omnis deleniti, illo dolores unde veniam, in voluptate quasi consequuntur libero sint. Accusantium obcaecati dignissimos velit aliquam consectetur veniam consequuntur unde numquam ipsum eius? Autem cumque nesciunt, ratione vitae consectetur laborum porro nihil dolor magnam a, placeat hic illo?
							</accordion>
							<accordion>
								<div slot="title" class="text-lg text-gray-800 font-medium">Reason to get a job</div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore neque, dolore omnis deleniti, illo dolores unde veniam, in voluptate quasi consequuntur libero sint. Accusantium obcaecati dignissimos velit aliquam consectetur veniam consequuntur unde numquam ipsum eius? Autem cumque nesciunt, ratione vitae consectetur laborum porro nihil dolor magnam a, placeat hic illo?
							</accordion>
						</tab>
						<tab name="About Job Creator">
							<accordion>
								<div slot="title" class="text-lg text-gray-800 font-medium">How you get the best Employee?</div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore neque, dolore omnis deleniti, illo dolores unde veniam, in voluptate quasi consequuntur libero sint. Accusantium obcaecati dignissimos velit aliquam consectetur veniam consequuntur unde numquam ipsum eius? Autem cumque nesciunt, ratione vitae consectetur laborum porro nihil dolor magnam a, placeat hic illo?
							</accordion>
							<accordion>
								<div slot="title" class="text-lg text-gray-800 font-medium">How to create Job?</div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore neque, dolore omnis deleniti, illo dolores unde veniam, in voluptate quasi consequuntur libero sint. Accusantium obcaecati dignissimos velit aliquam consectetur veniam consequuntur unde numquam ipsum eius? Autem cumque nesciunt, ratione vitae consectetur laborum porro nihil dolor magnam a, placeat hic illo?
							</accordion>
						</tab>
					</tabs>
				</card>
			</div>
		</div>
	</layout>
</template>

<script>
import Layout from "@/Shared/Layout";
import Heading from "@/Shared/tuis/Heading";
import Tab from "@/Shared/tuis/Tab";
import Tabs from "@/Shared/tuis/Tabs";
import Accordion from "@/Shared/tuis/Accordion";
import Card from "@/Shared/tuis/Card";

export default {
	components: {
		Layout,
		Heading,
		Tabs,
		Tab,
		Accordion,
		Card
	}
};
</script>
