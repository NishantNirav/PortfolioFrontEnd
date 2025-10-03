import os

def generate_directory_structure(root_dir, output_file):
    """
    Walk through the directory and write the structure to a file.
    """
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            for dirpath, dirnames, filenames in os.walk(root_dir):
                level = dirpath.replace(root_dir, '').count(os.sep)
                indent = '    ' * level
                f.write(f'{indent}[Folder] {os.path.basename(dirpath)}/\n')
                subindent = '    ' * (level + 1)
                for filename in filenames:
                    f.write(f'{subindent}[File] {filename}\n')
        print(f"Directory structure saved to: {output_file}")
    except Exception as e:
        print(f"Error while generating directory structure: {e}")


def generate_code_files(root_dir, output_file):
    """
    Collect the contents of all readable files and write them to a single file.
    """
    try:
        with open(output_file, 'w', encoding='utf-8') as out_file:
            for dirpath, dirnames, filenames in os.walk(root_dir):
                for filename in filenames:
                    file_path = os.path.join(dirpath, filename)
                    try:
                        with open(file_path, 'r', encoding='utf-8') as code_file:
                            relative_path = os.path.relpath(file_path, root_dir)
                            out_file.write(f"{relative_path} {filename} starts here:\n")
                            out_file.write(code_file.read())
                            out_file.write(f"\nEnd of {filename}\n\n")
                    except UnicodeDecodeError:
                        print(f"Skipped binary or non-text file: {file_path}")
                    except Exception as e:
                        print(f"Error reading file {file_path}: {e}")
        print(f"Code content saved to: {output_file}")
    except Exception as e:
        print(f"Error while generating code files: {e}")


def main():
    """
    Main function to execute directory scanning and code aggregation.
    """
    current_dir = os.getcwd()
    structure_output = os.path.join(current_dir, 'directory-structure.txt')
    code_output = os.path.join(current_dir, 'code-files.txt')

    print("Generating directory structure...")
    generate_directory_structure(current_dir, structure_output)

    print("Generating code files...")
    generate_code_files(current_dir, code_output)

if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        print(f"Unexpected error occurred in the main program: {e}")
