SRC_DIR := src
OUT_DIR := out

# Find all markdown files in the source directory and its subdirectories
MARKDOWN_FILES := $(shell find $(SRC_DIR) -name '*.md')

# Convert each markdown file to HTML using pandoc, and output to corresponding directory in out/
HTML_FILES := $(patsubst $(SRC_DIR)/%.md,$(OUT_DIR)/%.html,$(MARKDOWN_FILES))

$(OUT_DIR)/%.html: $(SRC_DIR)/%.md
	@mkdir -p $(@D)
	bin/pandoc $< -o $@

# Convert each markdown file to PDF using pandoc, and output to corresponding directory in out/
HTML_FILES := $(patsubst $(SRC_DIR)/%.md,$(OUT_DIR)/%.pdf,$(MARKDOWN_FILES))

$(OUT_DIR)/%.pdf: $(SRC_DIR)/%.md
	@mkdir -p $(@D)
	bin/pandoc $< -o $@

# Default target is to build all HTML files
all: $(HTML_FILES)

# Clean up output directory
clean:
	rm -rf $(OUT_DIR)
