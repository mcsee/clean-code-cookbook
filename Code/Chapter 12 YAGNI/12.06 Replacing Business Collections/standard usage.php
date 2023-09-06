<?php

// final class Dictionary is no longer needed
    
// The tests use a standard class
// In PHP you use associative arrays
// Java and other languages have HashTables, Dictionaries etc. etc.

final class DictionaryTest extends TestCase {
    public function test01EmptyDictionaryHasNoWords() {
        $dictionary = [];
        $this->assertEquals(0, count($dictionary));
    }

    public function test02SingleDictionaryReturns1AsCount() {
        $dictionary = ['happy']; 
        $this->assertEquals(1, count($dictionary));
    }

    public function test03DictionaryDoesNotIncludeWord() {
        $dictionary = ['happy']; 
        $this->assertFalse(in_array('sadly', $dictionary));
    }

    public function test04DictionaryIncludesWord() {
        $dictionary = ['happy'];  
        $this->assertTrue(in_array('happy', $dictionary));
    }
} 
