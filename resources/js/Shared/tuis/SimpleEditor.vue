<template>
	<div>
		<label v-if="label" class="form-label block mb-1 font-semibold text-gray-700">{{ label }}</label>
		<div class="relative">
			<div class="simple-editor" :class="{'error' : errors.length}">
				<div class="editor-node rounded-b-lg" ref="editorNode"></div>
			</div>

			<div v-if="errors.length" class="text-red-600 mt-1 text-sm">{{ errors[0] }}</div>

			<svg
				class="absolute text-red-600 fill-current"
				style="top: 52px; right: 12px"
				v-if="errors.length"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
			>
				<path
					d="M11.953,2C6.465,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.493,2,11.953,2z M13,17h-2v-2h2V17z M13,13h-2V7h2V13z"
				/>
			</svg>
		</div>
	</div>
</template>

<script>
import Quill from "quill";
import "quill/dist/quill.snow.css";

export default {
	props: {
		value: {
			default: "",
			type: String
		},
		label: String,
		errors: {
			type: Array,
			default: () => []
		}
	},

	data() {
		return {
			editorContent: null,
			editorInstance: null,
			editorOpts: {
				modules: {
					toolbar: [
						[{ header: [2, 3, 4, 5, 6, false] }],

						["bold", "italic", "underline", "strike"],
						["blockquote", "code-block"],
						[
							{ list: "ordered" },
							{ list: "bullet" },
							{ align: [] }
						],

						["clean"],
						["link"]
					]
				},
				theme: "snow"
			}
		};
	},

	watch: {
		value(newVal) {
			// Only update the content if it's changed from an external source
			// or else it'll act weird when you try to type anything
			if (newVal !== this.editorContent) {
				this.editorInstance.pasteHTML(newVal);
			}
		}
	},

	mounted() {
		this.initializeEditor();
	},

	beforeDestroy() {
		// Turn off all listeners set on text-change
		this.editorInstance.off("text-change");
	},

	methods: {
		initializeEditor() {
			// Set initial content that's going to be picked up by Quill
			this.$refs.editorNode.innerHTML = this.value;
			// Create the Quill instance
			this.editorInstance = new Quill(
				this.$refs.editorNode,
				this.editorOpts
			);
			// Setup handler for whenever things change inside Quill
			this.editorInstance.on("text-change", this.onEditorContentChange);
			// Save any initial content to this.editorContent
			this.setEditorContent();
		},
		onEditorContentChange() {
			// Whenever we change anything, update this.editorContent
			this.setEditorContent();
			// Then emit its value as input so we have a working v-model
			// This $emit will be catched up in the watch:value
			// that's why we guard against calling pasteHTML
			// calling that function while we are typing is undesirable
			this.$emit("input", this.editorContent);
		},
		setEditorContent() {
			this.editorContent = this.editorInstance.getText().trim()
				? this.editorInstance.root.innerHTML
				: "";
		}
	}
};
</script>

<style>
.ql-toolbar.ql-snow {
	border-top-left-radius: 0.5rem;
	border-top-right-radius: 0.5rem;
}
.ql-toolbar.ql-snow,
.ql-container.ql-snow {
	border: 2px solid #e2e8f0;
}

.ql-container,
.ql-editor {
	font-size: 1rem;
	font-family: inherit;
}

.simple-editor.error .ql-toolbar.ql-snow,
.simple-editor.error .ql-container.ql-snow {
	border-color: #e53e3e;
}
</style>